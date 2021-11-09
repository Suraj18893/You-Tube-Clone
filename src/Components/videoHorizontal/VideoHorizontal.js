import React, { useEffect, useState } from "react";
import "./_videoHorizontal.scss";

import { AiFillEye } from "react-icons/ai";
import request from "../../api";
import moment from "moment";
import numeral from "numeral";
import { Col, Row } from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useHistory } from "react-router";

const VideoHorizontal = ({ video }) => {
  const {
    id,
    snippet: {
      channelId,
      channelTitle,
      description,
      title,
      publishedAt,
      thumbnails: { medium },
      resourceId,
    },
  } = video;

  const seconds = moment.duration("1000000").asSeconds();
  const _duration = moment.utc(seconds * 1000).format("mm:ss");

//   const isVideo = !(id.kind === 'youtube#channel' || subScreen)

  const [views, setViews] = useState(null);
  const [duration, setDuration] = useState(null);
  const [channelIcon, setChannelIcon] = useState(null);

  useEffect(() => {
    const get_video_details = async () => {
      const {
        data: { items },
      } = await request("/videos", {
        params: {
          part: "contentDetails,statistics",
          id: id.videoId,
        },
      });
      setDuration(items[0].contentDetails.duration);
      setViews(items[0].statistics.viewCount);
    };
    get_video_details();
  }, [id]);

  useEffect(() => {
    const get_channel_icon = async () => {
      const {
        data: { items },
      } = await request("/channels", {
        params: {
          part: "snippet",
          id: channelId,
        },
      });
      setChannelIcon(items[0].snippet.thumbnails.default);
    };
    get_channel_icon();
  }, [channelId]);
  
  const history = useHistory()
  const handleClick = () => {
    // isVideo
        history.push(`/watch/${id.videoId}`)
    //    : history.push(`/channel/${_channelId}`)
 }
  return (
    <Row className="py-2 m-1 videoHorizontal align-items-center" onClick={handleClick}>
      <Col xs={6} md={4} className="videoHorizontal__left">
        <LazyLoadImage
          src={medium.url}
          effect="blur"
          className={`videoHorizontal__thumbnail`}
          wrapperClassName="videoHorizontal__thumbnail-wrapper"
        />
        <span className="videoHorizontal__duration">{_duration}</span>
      </Col>
      <Col xs={6} md={8} className="p-0 videoHorizontal__right">
        <p className="mb-1 videoHorizontal__title">{title}</p>
        <div className="videoHorizontal__details">
          <AiFillEye /> {numeral(views).format("0.a")} Views •{" "}
          {moment(publishedAt).fromNow()}
        </div>
        <div className="my-1 videoHorizontal__channel d-flex align-items-center">
          <p>{channelTitle}</p>
        </div>
      </Col>
    </Row>
  );
};

export default VideoHorizontal;
