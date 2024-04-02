import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CountDownImg from "../assets/images/countdown.png"

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 24px 16px;
  margin-bottom: 50px;
  background: #595552;
`;

const Title = styled.h3`
  color: #B79265;
  margin-bottom: 24px;
  font-style: italic;
`;

const Image = styled.img`
  width: 125px;
  margin-bottom: 25px;
`


function Countdown() {
  const targetDate = "2024-04-20T08:00:00";
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    } else {
      // If the countdown is over, set all units to zero
      timeLeft = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
  };

  return (
    <Box className="container">
      <Image src={CountDownImg} alt="photos" />
      <Title>Count The Date</Title>
      <div className="countdown-grid">
        <div className="countdown-item">
          <div className="countdown-value">{timeLeft.days}</div>
          <div className="countdown-label">Hari</div>
        </div>
        <div className="countdown-item">
          <div className="countdown-value">{formatTime(timeLeft.hours)}</div>
          <div className="countdown-label">Jam</div>
        </div>
        <div className="countdown-item">
          <div className="countdown-value">{formatTime(timeLeft.minutes)}</div>
          <div className="countdown-label">Menit</div>
        </div>
        <div className="countdown-item">
          <div className="countdown-value">{formatTime(timeLeft.seconds)}</div>
          <div className="countdown-label">Detik</div>
        </div>
      </div>
    </Box>
  );
}

export default Countdown;
