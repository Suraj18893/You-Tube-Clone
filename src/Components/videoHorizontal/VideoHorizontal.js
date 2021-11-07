import React from "react";
import "./_videoHorizontal.scss";

import { AiFillEye } from "react-icons/ai";
import request from "../../api";
import moment from "moment";
import numeral from "numeral";
import { Col, Row } from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";

const VideoHorizontal = () => {
  const seconds = moment.duration("1000000").asSeconds();
  const _duration = moment.utc(seconds * 1000).format("mm:ss");
  return (
    <Row className="py-2 m-1 videoHorizontal align-items-center">
      <Col xs={6} md={4} className="videoHorizontal__left">
        <LazyLoadImage
          src="https://www.grammy.com/sites/com/files/styles/image_landscape_hero/public/muzooka/Slash/Slash_16_9_1603972395.jpg?itok=kzwAUz3n"
          effect="blur"
          className={`videoHorizontal__thumbnail`}
          wrapperClassName="videoHorizontal__thumbnail-wrapper"
        />
        <span className="videoHorizontal__duration">{_duration}</span>
      </Col>
      <Col xs={6} md={8} className="p-0 videoHorizontal__right">
        <p className="mb-1 videoHorizontal__title">Slash</p>
        <div className="videoHorizontal__details">
          <AiFillEye /> {numeral(1000000).format("0.a")} Views •{" "}
          {moment("2021-10-10").fromNow()}
        </div>
        <div className='my-1 videoHorizontal__channel d-flex align-items-center'>
            <p>
                Slash guitar
            </p>
        </div>
      </Col>
    </Row>
  );
};

export default VideoHorizontal;
