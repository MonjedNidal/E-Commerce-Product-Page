import { useState } from "react";

import NextIcon from "../images/icon-next.svg";
import PreviousIcon from "../images/icon-previous.svg";
import Image1 from "../images/image-product-1.jpg";
import Image2 from "../images/image-product-2.jpg";
import Image3 from "../images/image-product-3.jpg";
import Image4 from "../images/image-product-4.jpg";
import Thumbnail1 from "../images/image-product-1-thumbnail.jpg";
import Thumbnail2 from "../images/image-product-2-thumbnail.jpg";
import Thumbnail3 from "../images/image-product-3-thumbnail.jpg";
import Thumbnail4 from "../images/image-product-4-thumbnail.jpg";
import Thumbnail from "./Thumbnail";
// eslint-disable-next-line react/prop-types
function ProductImages({ handleImageZoom }) {
  const images = [Image1, Image2, Image3, Image4];
  const thumbnails = [Thumbnail1, Thumbnail2, Thumbnail3, Thumbnail4];
  const [selectedImage, setSelectedImage] = useState(0);
  const handleThumbnailClicked = (id) => {
    setSelectedImage(id);
  };
  const thumbnailsArray = thumbnails.map((thumbnail, index) => (
    <Thumbnail
      id={index}
      thumbnailSrc={thumbnail}
      key={thumbnail}
      handleThumbnailClicked={handleThumbnailClicked}
      className={selectedImage === index ? "selected" : ""}
    />
  ));
  return (
    <div className="images position-relative">
      <div className=" d-flex justify-content-between align-items-center">
        <div className="position-absolute">
          <div className="nextPreviousMainImg">
            <img
              src={PreviousIcon}
              onClick={() => {
                setSelectedImage((selectedImage - 1 + 4) % 4);
              }}
            />
            <img
              src={NextIcon}
              onClick={() => {
                setSelectedImage((selectedImage + 1) % 4);
              }}
            />
          </div>
        </div>
        <img
          onClick={() => {
            handleImageZoom();
          }}
          src={images[selectedImage]}
          className="mainImg"
        />
      </div>
      <div className="thumbnails d-flex justify-content-between">
        {thumbnailsArray}
      </div>
    </div>
  );
}

export default ProductImages;
