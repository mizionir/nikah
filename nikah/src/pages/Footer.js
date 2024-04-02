import React from "react"
import styled from "styled-components";
import FooterImg from "../assets/images/footer.png"

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 16px;
  margin-bottom: 50px;
  text-align: center;
`

const Title = styled.h1`
  margin: 16px auto;
  color: #927B65;
`

const SubTitle = styled.h3`
  margin-bottom: 4px;
`

const Image = styled.img`
  width: 200px;
  margin: 25px auto;
  margin-bottom: 50px;
`

function Footer() {
  return (
    <>
        <Box className="container">
          <Image src={FooterImg} alt="" />
          <SubTitle>Join our Wedding</SubTitle>
          <Title>Alief & Citra</Title>
          <SubTitle>12 . 05 . 2024</SubTitle>
        </Box>
    </>
  );
}

export default Footer
