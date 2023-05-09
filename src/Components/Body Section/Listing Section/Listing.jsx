import React from "react";
import "./listing.css";
import { AiFillHeart } from "react-icons/ai";
import { BsArrowRightShort } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import img from "../../../Assets/image-3.png";
import img1 from "../../../Assets/image-4.png";
import img2 from "../../../Assets/image-5.png";
import img4 from "../../../Assets/image-7.jpg";
const Listing = () => {
  return (
    <div className="lisitingSection">
      <div className="heading flex">
        <h1>My Listings</h1>
        <button className="btn flex upper">
          See All <BsArrowRightShort className="icon" />{" "}
        </button>
      </div>

      <div className="secContainer flex">
        <div className="singleItem">
          <AiFillHeart className="icon" />
          <img src={img} alt="image Name" />
          <h3>Annual vince</h3>
        </div>
        <div className="singleItem">
          <AiOutlineHeart className="icon" />
          <img src={img1} alt="image Name" />
          <h3>Annual vince</h3>
        </div>
        <div className="singleItem">
          <AiOutlineHeart className="icon" />
          <img src={img2} alt="image Name" />
          <h3>Annual vince</h3>
        </div>
        <div className="singleItem">
          <AiFillHeart className="icon" />
          <img src={img} alt="image Name" />
          <h3>Annual vince</h3>
        </div>
      </div>
      <div className="sellers flex">
        <div className="topSellers ">
          <div className="heading flex">
            <h3>Top Sellers</h3>
            <button className="btn flex">
              See All
              <BsArrowRightShort className="icon" />
            </button>
          </div>
          <div className="card flex">
            <div className="users">
              <img src={img4} alt="User Image" />
              <img src={img4} alt="User Image" />
              <img src={img4} alt="User Image" />
              <img src={img4} alt="User Image" />
            </div>
            <div className="cardText">
              <span>
                14.556 Plant sold <br />
                <small>
                  21 Sellers <span className="date">7 Days</span>
                </small>
              </span>
            </div>
          </div>
        </div>

        <div className="featuredSellers topSellers">
          <div className="heading flex">
            <h3>Featured Sellers</h3>
            <button className="btn flex">
              See All
              <BsArrowRightShort className="icon" />
            </button>
          </div>
          <div className="card flex">
            <div className="users">
              <img src={img4} alt="User Image" />
              <img src={img4} alt="User Image" />
              <img src={img4} alt="User Image" />
              <img src={img4} alt="User Image" />
            </div>
            <div className="cardText">
              <span>
                14.556 Plant sold <br />
                <small>
                  21 Sellers <span className="date">7 Days</span>
                </small>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Listing;
