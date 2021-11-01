import moment from "moment";
import numeral from "numeral"
import React from "react";
import "./_videoMetaData.scss";
import { MdThumbUp, MdThumbDown } from 'react-icons/md'


const VideoMetaData = () => {
  return (
    <div className="py-2 videoMetaData">
      <div className="videoMetaData__top">
        <h5>Video Tittle</h5>
        <div className="py-1 d-flex justify-content-between align-items-center">
          <span>
            {/* {moment(10000).format("0.a")} Views •
            {numeral('2020-11-02').fromNow()} */}
          </span>
        </div>
      </div>
      <div className="videoMetaData__channel"></div>
      <div className="videoMetaData__description"></div>
    </div>
  );
};

export default VideoMetaData;
