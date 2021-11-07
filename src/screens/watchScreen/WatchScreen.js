import React, { useEffect } from "react";
import "./WatchScreen.scss";
import { Col, Row } from "react-bootstrap";
import VideoMetaData from "../../Components/videoMetaData/VideoMetaData";
import VideoHorizontal from "../../Components/videoHorizontal/VideoHorizontal";
import Comments from "../../Components/Comments/Comments";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getVideoById } from "../../redux/actions/videos.action";

const WatchScreen = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVideoById(id));
  }, [dispatch, id]);

  const { video, loading } = useSelector((state) => state.selectedVideo);
  return (
    <Row>
      <Col lg={8}>
        <div className="watchScreen__player">
          <iframe
            src={`https://www.youtube.com/embed/${id}`}
            frameBorder="0"
            title={video?.snippet?.title}
            allowFullScreen
            width="100%"
            height="100%"
          ></iframe>
        </div>
        {!loading ? (
          <VideoMetaData video={video} videoId={id} />
        ) : (
          <h6>loading...</h6>
        )}

        <Comments />
      </Col>
      <Col lg={4}>
        {[...Array(20)].map(() => (
          <VideoHorizontal />
        ))}
      </Col>
    </Row>
  );
};

export default WatchScreen;
