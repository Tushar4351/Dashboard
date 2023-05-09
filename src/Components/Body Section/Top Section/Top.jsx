import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import { TbMessageCircle } from "react-icons/tb";
import { MdOutlineNotificationsNone } from "react-icons/md";
import "./top.css";
import img7 from "../../../Assets/Admin-image.jpg";
import video from "../../../Assets/raining-video.mp4";
import { BsArrowRightShort } from "react-icons/bs";
import img2 from "../../../Assets/image-2.png";


const Top = () => {
  return (
    <div className="topSection">
      <div className="headerSection flex">
        <div className="title">
          <h1>Welcome to PlantD.</h1>
          <p>Hello User, Welcome back!</p>
        </div>

        <div className="searchBar flex">
          <input type="text" placeholder="Search Dashboard" />
          <BiSearchAlt className="ico" />
        </div>

        <div className="adminDiv flex">
          <TbMessageCircle className="ico" />
          <MdOutlineNotificationsNone className="ico" />
          <div className="adminImage">
            <img className="Admin" src={img7} alt="Admin " />
          </div>
        </div>
      </div>

      <div className="cardSection flex">
        <div className="rightCard flex">
          <h1>Create and sell extraordinary products</h1>
          <p>
            The world's fast growing industry today are natural made products!
          </p>
          <div className="buttons flex">
            <button className="btn">Explore More</button>
            <button className="btn transparent">Top Sellers</button>
          </div>

          <div className="videoDiv">
            <video src={video} autoPlay loop muted></video>
          </div>
        </div>
        <div className="leftCard flex">
          <div className="main flex">
            <div className="textDiv">
              <h1>My Stat</h1>

              <div className="flex">
                <span>
                  Today <br /> <small>4 Orders</small>
                </span>
                <span>
                  This Month <br /> <small>175 Orders</small>
                </span>
              </div>

              <span className="flex link">
                Go to my orders <BsArrowRightShort className="ico send" />
              </span>
            </div>

            <div className="imgDiv">
              <img className="lamp" src={img2} alt="lamp" />
            </div>

           {/* <div className="sideBarCard">
              <BsQuestionCircle className="icon" />
              <div className="cardContent">
                <div className="circle1"></div>
                <div className="circle2"></div>
                <h3>Help Center</h3>
                <p>
                  Having trouble in Planti, please contact us from for more
                  questions.
                </p>
                <button className="btn">Go to help center</button>
              </div>
            </div>*/}

          </div>
        </div>
      </div>
    </div>
  );
};

export default Top;
