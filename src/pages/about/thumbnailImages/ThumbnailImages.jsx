import "./ThumbnailImages.css";

export default function ThumbnailImage() {
  return (
    <section className="thumbnail-container">
      <ThumbnailFrames />
      <ThumbnailFrames />
      <div>
        <div className="triangle "></div>
      </div>
    </section>
  );
}

function ThumbnailFrames() {
  return (
    <div className="frames-div">
      <img src="https://acombustion.com/wp-content/uploads/2020/05/jzhc.jpg"></img>
    </div>
  );
}
