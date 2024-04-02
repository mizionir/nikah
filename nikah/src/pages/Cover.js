import React, { useState, useRef } from "react";
import styled from "styled-components";
import CoverImg from "../assets/images/cover.png";
import PlayImg from "../assets/images/play.png";
import PauseImg from "../assets/images/pause.png";
import BgImg from "../assets/images/bg.jpg";
// import MusicAudio from "../assets/music/song.ogg";
import MusicAudio from "../assets/music/song.mp3";

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  overflow: hidden;
  background-image: url(${BgImg});
  background-size: cover;
  background-position: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9;
`;

const Button = styled.button`
  padding: 16px;
  border: transparent;
  border-radius: 8px;
  margin-top: 24px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  background-color: #595552;
  color: #ffffff;
`;

const Image = styled.img`
  max-width: 250px;
  margin-bottom: 24px;
`;

const Heading = styled.h1`
  margin: 0;
`;

const SubHeading = styled.h3`
  margin: 0;
`;

const MusicBtn = styled.button`
  position: fixed;
  bottom: 15px;
  left: 15px;
  border-radius: 50%;
  border: 3px solid #927B65;
  box-sizing: border-box;
  padding: 8px;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const MusicImg = styled.img`
  width: 20px;
`

function Cover() {
  const [fadeOut, setFadeOut] = useState(false);

  const queryParams = new URLSearchParams(window.location.search);
  const toParam = queryParams.get("to");
  const decodedToParam = decodeURIComponent(toParam);
  const guest = decodedToParam === "null" ? "Tamu Undangan" : decodedToParam;

  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleTogglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleClickOpen = () => {
    setFadeOut(true);
    handleTogglePlay();
  };

  return (
    <>
      <Box
        className={`fade-out-component ${fadeOut ? "fade-out" : ""} container`}
      >
        <SubHeading style={{ marginBottom: "8px" }}>The Wedding of</SubHeading>
        <Heading>Alief & Citra</Heading>
        <Image src={CoverImg} alt="photos" />
        <SubHeading style={{ marginBottom: "12px" }}>
          Dear Mr./Mrs./Ms.
        </SubHeading>
        <Heading style={{ marginBottom: "12px" }}>{guest}</Heading>
        <SubHeading>You are invited to our wedding.</SubHeading>

        <Button onClick={handleClickOpen}>Open Invitation</Button>
      </Box>
      <div>
        <audio ref={audioRef} src={MusicAudio} loop={true} volume={0.2}></audio>
        <MusicBtn onClick={handleTogglePlay}>
          {isPlaying ? (
            <MusicImg src={PauseImg} alt="" />
          ) : (
            <MusicImg src={PlayImg} alt="" />
          )}
        </MusicBtn>
      </div>
    </>
  );
}

export default Cover;
