import React from "react";
import "./_video.scss";
import { AiFillEye } from "react-icons/ai";

const Video = () => {
  return (
    <div className="video">
      <div className="video__top">
        <img
          src="https://assets.hongkiat.com/uploads/nature-photography/autumn-poolside.jpg"
          alt=""
        />
        <span>05:43</span>
      </div>
      <div className="video__title">
       Nature
      </div>
      <div className="video__details">
        <span>
          <AiFillEye /> 5m Views •
        </span>
        <span>5 days ago</span>
      </div>
      <div className="video__channel">
        <img
          src="https://media-exp1.licdn.com/dms/image/C4E03AQFKQrRsSWSC8g/profile-displayphoto-shrink_400_400/0/1622308100783?e=1640217600&v=beta&t=W6PJLgBP4QOny5tc5L8tBDZqkBvzQn28jYu6EF5Dl2s"
          alt=""
        />
        <p>Pro Panda</p>
      </div>
    </div>
  );
};

export default Video;
