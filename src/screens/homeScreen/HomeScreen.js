import React from "react";
import "./_homeScreen.scss";
import { Col, Container, Row } from "react-bootstrap";
import CategoriesBar from "../../Components/categoriesBar/CategoriesBar";
import Video from "../../Components/video/Video";
import { useDispatch, useSelector } from "react-redux";
import { getPopularVideos, getVideosByCategory } from "../../redux/actions/videos.action";
import { useEffect } from "react";
import InfiniteScroll from 'react-infinite-scroll-component'

const HomeScreen = () => {

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getPopularVideos())
  },[dispatch])

  const { videos, activeCategory, loading } = useSelector(
    state => state.homeVideos
 )

 const fetchData = () => {
    
       dispatch(getVideosByCategory())
    
 }
 
 return (
    <Container>
       <CategoriesBar />

       <InfiniteScroll
          dataLength={videos.length}
          next={fetchData}
          hasMore={true}
          loader={
             <div className='spinner-border text-danger d-block mx-auto'></div>
          }
          className='row'>
          {videos.map(video => (
                  <Col lg={3} md={4}>
                     <Video video={video} key={video.id} />
                  </Col>
               ))
             
               }
       </InfiniteScroll>
    </Container>
 )
};

export default HomeScreen;
