import React from "react";
import "./_comment.scss";
import moment from "moment";

const comment = () => {
  return (
    <div className="p-2 comment d-flex">
      <img
        src="https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png"
        alt=""
        className="mr-3 rounded-circle"
      />
      <div className="comment__body">
        <p className="mb-1 comment__header">
          Suraj • {moment('2021-10-10').fromNow()}
        </p>
        <p>nice video dude</p>
      </div>
    </div>
  );
};

export default comment;
