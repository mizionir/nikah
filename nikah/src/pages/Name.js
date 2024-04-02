import React from "react"
import styled from "styled-components";
import AliefImg from "../assets/images/alief.png"
import CitraImg from "../assets/images/citra.png"

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  text-align: center;
  padding: 0 16px;
  margin-bottom: 50px;
`

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-top: 30px;
`

const NameWrapper = styled.div`
  text-align: center;
  flex-shrink: 1;
`

const Text = styled.h3`
  max-width: 100px;
  text-align: center;
  margin: 0 auto;
  margin-bottom: 16px;
  min-height: 60px;
  color: #927B65;
`

const TextP = styled.p`
  margin: 4px 0;
`

const Image = styled.img`
  width: 125px;
  margin-bottom: 24px;
`

function Name() {
  return (
    <Box className="container">
        <h4 className="mb-2">Assalamu'alaikum Wr. Wb.</h4>
        <TextP>Bapak/Ibu diundang untuk hadir dan ikut bersukacita pada pernikahan:</TextP>
        <Wrapper>
            <NameWrapper>
              <Image src={AliefImg} alt="photos" />
              <Text>Muhammad Alief Faza Nujjiya</Text>
              <TextP style={{ fontWeight: 'bolder', fontStyle: 'italic' }}>Putra dari</TextP>
              <TextP>Djohan Hidayat</TextP>
              <TextP>&</TextP>
              <TextP>Lie Mei Ing</TextP>
            </NameWrapper>
            <NameWrapper>
              <Image src={CitraImg} alt="photos" />
              <Text>Citra Yulianita</Text>
              <TextP  style={{ fontWeight: 'bolder', fontStyle: 'italic' }}>Putri dari</TextP>
              <TextP>Denny Fadhly</TextP>
              <TextP>&</TextP>
              <TextP>Adriani</TextP>
            </NameWrapper>
           
        </Wrapper>
    </Box>
  );
  }

  export default Name