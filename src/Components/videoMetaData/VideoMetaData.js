import moment from "moment";
import numeral from "numeral";
import React from "react";
import "./_videoMetaData.scss";
import { MdThumbUp, MdThumbDown } from "react-icons/md";
import ShowMoreText from "react-show-more-text";

const VideoMetaData = () => {
  return (
    <div className="py-2 videoMetaData">
      <div className="videoMetaData__top">
        <h5>Video Tittle</h5>
        <div className="py-1 d-flex justify-content-between align-items-center">
          <span>
            {numeral(10000).format("0.a")} Views •
            {moment("2020-11-02").fromNow()}
          </span>

          <div>
            <span className="mr-3">
              <MdThumbUp size={26} /> {numeral(1000).format("0.a")} {"   "}
            </span>
            <span className="mr-3">
              <MdThumbDown size={26} /> {numeral(12).format("0.a")}
            </span>
          </div>
        </div>
      </div>
      <div className="py-3 my-2 videoMetaData__channel d-flex justify-content-between align-items-center">
        <div className="d-flex">
          <img
            src="https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png"
            alt=""
            className="mr-3 rounded-circle"
          />
          <div className="d-flex flex-column">
            <span>Suraj Ganguly</span>
            <span> {numeral(100000000).format("0.a")} Subscribers</span>
          </div>
        </div>
        <button className="p-2 m-2 border-0 btn">Subscribe</button>
      </div>
      <div className="videoMetaData__description">
        <ShowMoreText
          lines={3}
          more="SHOW MORE"
          less="SHOW LESS"
          anchorClass="showMoreText"
          expanded={false}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore
          deleniti, minima id vero ab quos illum magnam deserunt quibusdam,
          repellat, odio enim autem. Excepturi illum laudantium modi obcaecati
          consequatur perferendis numquam debitis saepe explicabo aliquam
          tenetur dignissimos culpa maiores distinctio, sint fugiat eum nam ab
          commodi laboriosam reprehenderit, eveniet voluptatum id. Lorem ipsum
          dolor sit, amet consectetur adipisicing elit. Debitis sit consectetur
          omnis totam tempore officiis corrupti tenetur unde officia perferendis
          voluptate maxime nemo magni quaerat quam praesentium, optio, ad
          accusantium, illo harum amet sunt.
        </ShowMoreText>
      </div>
    </div>
  );
};

export default VideoMetaData;
