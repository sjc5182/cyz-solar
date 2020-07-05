import styled from "styled-components";

export const VideoContainer = styled.div`
  background: black;
  .player-wrapper {
    position: relative;
    padding-top: 25%; /* Player ratio: 100 / (1280 / 720) */
  }

  .react-player {
    position: absolute;
    top: 0;
    left: 0;
  }

  @media (min-width: 768px) {
    .player-wrapper {
      padding-top: 33.33%;
    }
  }

  @media (min-width: 992px) {
    .player-wrapper {
      padding-top: 41%;
    }
  }

  @media (min-width: 1200px) {
    .player-wrapper {
      padding-top: 58.33%;
    }
  }
`;
