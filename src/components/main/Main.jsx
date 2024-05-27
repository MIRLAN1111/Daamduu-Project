import React from 'react'
import videoBg from '../../assets/video/mixkit-double-burger-with-fries-14010-large.mp4';
import styled from 'styled-components';

const Main = () => {
  return (
    <div>
      <VideoPlay>
        <video autoPlay loop muted>
          <source src={videoBg} type="video/mp4" />
        </video>
      </VideoPlay>
    </div>
  );
};

export default Main;

const VideoPlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -1;

  video {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    z-index: -1;
  }
`;