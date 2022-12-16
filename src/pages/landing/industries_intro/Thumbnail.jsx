import Img1 from "../../../assets/images/thumbnail.webp";

export default function Thumbnail({ category, index }) {
//  let seconds = 1;
//   if ([0, 1, 4].includes(index)) seconds = 0;
//   else seconds = 2;
  return (
    <>
      <img
        className={`thumb-img  animate__animated animate__fadeInBottomLeft`}
        src={Img1}
        alt=""
      />
      {/* <Box sx={{ backgroundColor: "grey"}}></Box> */}

      <div className="thumb-bottom-container">
        <p className="thumb-text">{category}</p>
        <div className="add-symbol">+</div>
      </div>
    </>
  );
}
