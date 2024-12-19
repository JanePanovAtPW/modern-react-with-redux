import ImageShow from "./ImageShow";
import "./ImageList.css";

function ImageList({ images }) {
  const renderededImages = images.map((image) => {
    return <ImageShow image={image} key={image.id} />;
  });
  return <div className="image-list">{renderededImages}</div>;
}

export default ImageList;
