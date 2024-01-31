import React, { useState } from "react";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.jpeg";
const ProductPage = () => {
  const [images, setImages] = useState({
    img1: img1,
    img2: img2,
    img3: img3,
    img4: img4,
  });
  const [activeImg, setActiveImage] = useState(images.img1);
  const [activeTile, setActiveTile] = useState("Description");
  const handleClick = (image) => {
    setActiveImage(image);
  };
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="container">
      <div className="product-main-details">
        <div className="img-container">
          <div className="img-left-container">
            <img
              src={images.img1}
              alt=""
              className="img-left"
              onClick={() => handleClick(images.img1)}
            />
            <img
              src={images.img2}
              alt=""
              className="img-left"
              onClick={() => handleClick(images.img2)}
            />
            <img
              src={images.img3}
              alt=""
              className="img-left"
              onClick={() => handleClick(images.img3)}
            />
            <img
              src={images.img4}
              alt=""
              className="img-left"
              onClick={() => handleClick(images.img4)}
            />
          </div>
          <div className="img-right">
            <img src={activeImg} alt="" />
          </div>
        </div>
        <div className="product-info-main">
          <div className="product-title-wrapper">
            <h1 className="product-title">Nike Revolution 6</h1>
            <h3>Brand : Nike</h3>
          </div>
          <div className="product-price">
            <span>£300.99</span>
          </div>
          <div className="product-size">
            <label htmlFor="size">Size</label>
            <select name="size-options" id="size">
              <option value="">Choose an option</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
            </select>
          </div>
          <div className="qty-addCart">
            <div className="qty">
              <button
                disabled={quantity === 0}
                onClick={() => {
                  setQuantity((prev) => prev - 1);
                }}
              >
                -
              </button>
              <span>{quantity}</span>
              <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
            </div>
            <button className="addCart">Add to cart</button>
          </div>
        </div>
      </div>
      <div className="product-info-details">
        <div className="tiles">
          <div className="tile-item">
            <a href="#description" onClick={() => setActiveTile("Description")}>
              Details
            </a>
          </div>
          <div className="tile-item">
            <a href="#review" onClick={() => setActiveTile("Reviews")}>
              Reviews
            </a>
          </div>
        </div>

        {activeTile === "Description" && (
          <div className="data-item-content" id="description">
            <div className="description">
              <p>hi</p>
              <p>description</p>
            </div>
          </div>
        )}
        {activeTile === "Reviews" && (
          <div className="data-item-content" id="review">
            <div className="review">
              <p>review</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductPage;
