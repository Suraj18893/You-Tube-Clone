import React from "react";
import "./WatchScreen.scss";
import { Col, Row } from "react-bootstrap";
import VideoMetaData from "../../Components/videoMetaData/VideoMetaData";
import VideoHorizontal from "../../Components/videoHorizontal/VideoHorizontal";
import Comments from "../../Components/Comments/Comments";

const WatchScreen = () => {
  return (
    <Row>
      <Col lg={8}>
        <div className="watchScreen__player">
          <iframe
            src="https://www.youtube.com/embed/QBWFBKJ6nb0"
            frameBorder="0"
            title='my video'
            allowFullScreen
            width="100%"
            height="100%"
          ></iframe>
        </div>
        <VideoMetaData/>
        <Comments/>
      </Col>
      <Col lg={4}>

          {
              [...Array(20)].map(()=>(<VideoHorizontal/>))
          }
      </Col>
    </Row>
  );
};

export default WatchScreen;
