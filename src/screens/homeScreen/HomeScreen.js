import React from "react";
import "./_homeScreen.scss";
import { Col, Container, Row } from "react-bootstrap";
import CategoriesBar from "../../Components/categoriesBar/CategoriesBar";
import Video from "../../Components/video/Video";
import { useDispatch, useSelector } from "react-redux";
import { getPopularVideos } from "../../redux/actions/videos.action";
import { useEffect } from "react";

const HomeScreen = () => {

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getPopularVideos())
  },[dispatch])

  const {videos} = useSelector(state=>state.homeVideos)

  return (
    <Container>
      <CategoriesBar />
      <Row>
        {videos.map((video) => (
          <Col lg={3} md={4} key={video.id}>
            <Video video={video}/>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default HomeScreen;
