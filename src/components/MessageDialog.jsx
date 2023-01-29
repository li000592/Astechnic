import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import FormControlLabel from "@mui/material/FormControlLabel";
import { TextareaAutosize } from "@mui/material";

const emailFormList = [
  {
    label: "Name",
    key: "name",
  },
  {
    label: "Company",
    key: "company",
  },
  {
    label: "Email",
    key: "email",
    inpuType: "email",
  },
  {
    label: "Phone Number",
    key: "phone",
    inpuType: "tel",
  },
  {
    label: "Question/Comment",
    key: "comment",
  },
];

export default function MessageDialog({ isOpen, setIsOpen }) {
  const [submitForm, setSubmitForm] = React.useState({});
  const handleClickOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleChange = (ev) => {
    const { value, name } = ev.target;
    setSubmitForm((data) => {
      return { ...data, [name]: value };
    });
  };

  console.log(submitForm);
  return (
    <Dialog open={isOpen} onClose={handleClose}>
      <DialogTitle sx={{ backgroundColor: "var(--theme-color-1)" }}>Contact Us</DialogTitle>
      <DialogContent>
        {emailFormList.map((i) =>
          i.key == "comment" ? (
            <>
              <p style={{ marginBottom: 0, fontWeight: 400, fontSize: "12px", marginTop: "8px" }}>{i.label}</p>
              <TextareaAutosize minRows={3} style={{ width: "100%" }} />
            </>
          ) : (
            <>
              <p style={{ marginBottom: 0, fontWeight: 400, fontSize: "12px", marginTop: "8px" }}>{i.label}</p>
              <TextField sx={{ marginTop: "8px", width: "100%" }} id={i.key} type={i.inpuType || "text"} />
            </>
          )
        )}
        <div style={{ display: "flex", justifyContent: "flex-end" }}></div>
      </DialogContent>
      <DialogActions sx={{ backgroundColor: "var(--theme-color-1)" }}>
        <Button onClick={handleClose} variant="contained">
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
}
