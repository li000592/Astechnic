import React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Button, Checkbox, Radio } from "@mui/material";

function createData(name, type) {
  return {
    name,
    type,
  };
}

function Row(props) {
  const { row, dataFilter, setDataFilter } = props;
  const [open, setOpen] = React.useState(true);

  return (
    <>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell component="th" scope="row" sx={{ color: "var(--theme-color-3)", fontWeight: 600 }}>
          {row.name}
        </TableCell>
        <TableCell align="right">
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell sx={{ padding: 0 }} colSpan={8}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box>
              <Table size="small">
                <TableBody>
                  {row.type.map((type) => (
                    <TableRow key={type} xs={{ "& > *": { borderBottom: "unset" } }}>
                      <TableCell component="th" scope="row">
                        {type}
                      </TableCell>
                      <TableCell align="right">
                        <Checkbox
                          name={type}
                          checked={dataFilter.displayType.includes(type)}
                          onClick={(ev) => {
                            const { checked, name } = ev.target;
                            if (checked) {
                              setDataFilter((obj) => {
                                return {
                                  displayNumber: 12,
                                  displayType: obj.displayType === "all" ? [name] : [...obj.displayType, name],
                                  status: "rerender",
                                };
                              });
                            } else {
                              setDataFilter((obj) => {
                                return {
                                  displayNumber: 12,
                                  displayType: obj.displayType.filter((type) => type !== name),
                                  status: "rerender",
                                };
                              });
                            }
                          }}
                        ></Checkbox>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

const rows = [
  // createData("Industry", ["Steel", "Refining", "Power Generation"]),
  // createData("Product", ["Steel", "Refining", "Power Generation"]),
  createData("Content Type", ["Industrial burners", "Valves", "Electronic Controls", "Burner"]),
];

function CollapsibleTable({ dataFilter, setDataFilter }) {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell>Search</TableCell>
            <TableCell align="right">
              <Button
                onClick={() => {
                  setDataFilter({
                    displayNumber: 12,
                    displayType: ["Industrial burners"],
                    status: "rerender",
                  });
                }}
              >
                Reset
              </Button>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, indx) => (
            <Row dataFilter={dataFilter} setDataFilter={setDataFilter} key={row + indx} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default function CardFilters({ dataFilter, setDataFilter }) {
  return (
    <div style={{ maxWidth: "400px" }}>
      <CollapsibleTable dataFilter={dataFilter} setDataFilter={setDataFilter} />
    </div>
  );
}
