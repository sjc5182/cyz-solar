import styled from "styled-components";

export const VideoContainer = styled.div`
  background: black;
  .player-wrapper {
    position: relative;
    padding-top: 50%; /* Player ratio: 100 / (1280 / 720) */
  }

  .react-player {
    position: absolute;
    top: 0;
    left: 0;
  }

  @media (min-width: 640px) {
    .player-wrapper {
      padding-top: 40%;
    }
  }

  @media (min-width: 1280px) {
    .player-wrapper {
      padding-top: 30%;
    }
  }
`;
