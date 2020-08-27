import React from "react";
import ReactPlayer from "react-player";
import { VideoContainer } from "../../Styled/Home/HomeVideo";

class ResponsivePlayer extends React.Component {
  render() {
    return (
      <VideoContainer>
        <div className="player-wrapper">
          <ReactPlayer
            className="react-player"
            url="https://anima-uploads.s3.amazonaws.com/projects/5e83c946bdb77f4f1c40a4aa/files/cyz-r01-kuan-ping-ying-wen.mp4"
            width="100%"
            height="100%"
            playing={false}
            controls={false}
          />
        </div>
      </VideoContainer>
    );
  }
}

export default ResponsivePlayer;
