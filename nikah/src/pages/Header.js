import React from "react"
import styled from "styled-components";
import CoverImg from "../assets/images/cover.png"
import Orn from "../assets/images/orn.png";


const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  overflow: hidden;
  position: relative;
`

const Image = styled.img`
  max-width: 250px;
  margin-bottom: 24px;
`

const Heading = styled.h1`
  margin: 0;
`

const SubHeading = styled.h3`
  margin: 0;
`

const Ornament = styled.img`
  width: 75px;
  margin-bottom: 25px;
`

function Header() {
  return (
    <Box className="container">
      <Ornament src={Orn} alt="photos" />
      <SubHeading>The Wedding of</SubHeading>
      <Heading style={{ margin: '12px 0' }}>Alief & Citra</Heading>
      <Image src={CoverImg} alt="photos" />
      <Heading style={{ fontStyle: 'italic', fontWeight: '400' }}>12 . 05 . 2024</Heading>
    </Box>
  );
  }

  export default Header
