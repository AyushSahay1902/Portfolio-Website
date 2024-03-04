import React, {useState, useEffect} from 'react';
import { MediaScroller, MediaElement } from './InfiniteScrollElements';
import { Heading, Text} from '@chakra-ui/react';
// import { iamneo } from '../../assets/iamneo.png';

const images = [
  'https://media.istockphoto.com/id/639695818/photo/photographer-workplace.jpg?s=2048x2048&w=is&k=20&c=nsNh31L6-lF5_gOwn1ZaFchibief5YCd5LhZbNJo4l8=',
  'https://via.placeholder.com/150',
  'https://media.istockphoto.com/id/639695818/photo/photographer-workplace.jpg?s=2048x2048&w=is&k=20&c=nsNh31L6-lF5_gOwn1ZaFchibief5YCd5LhZbNJo4l8=',
  'https://via.placeholder.com/150',
  'https://media.istockphoto.com/id/639695818/photo/photographer-workplace.jpg?s=2048x2048&w=is&k=20&c=nsNh31L6-lF5_gOwn1ZaFchibief5YCd5LhZbNJo4l8=',
  'https://via.placeholder.com/150',
  'https://via.placeholder.com/150',
  'https://via.placeholder.com/150',
  'https://via.placeholder.com/150',
  'https://via.placeholder.com/150',
  'https://via.placeholder.com/150',
  // ... add more images here
];

const InfiniteScroll = () => {


  return (
    <MediaScroller className="snaps-inline scrolling">
      <MediaElement className="media-element">
        <img src={images[0]} alt="placeholder" />
        <p>Title</p>
      </MediaElement>
      <MediaElement className="media-element">
        <img src={images[1]} alt="placeholder" />
        <p>Title</p>
      </MediaElement>
      <MediaElement className="media-element">
        <img src={images[2]} alt="placeholder" />
        <p>Title</p>
      </MediaElement>
      <MediaElement className="media-element">
        <img src={images[3]} alt="placeholder" />
        <p>Title</p>
      </MediaElement>
      <MediaElement className="media-element">
        <img src={images[4]} alt="placeholder" />
        <p>Title</p>
      </MediaElement>
      <MediaElement className="media-element">
        <img src={images[5]} alt="placeholder" />
        <p>Title</p>
      </MediaElement>
      <MediaElement className="media-element">
        <img src={images[6]} alt="placeholder" />
        <p>Title</p>
      </MediaElement>
      <MediaElement className="media-element">
        <img src={images[7]} alt="placeholder" />
        <p>Title</p>
      </MediaElement>
    </MediaScroller>
  );
}
export default InfiniteScroll;
