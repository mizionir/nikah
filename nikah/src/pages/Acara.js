import React from "react"
import styled from "styled-components";
import AkadImg from "../assets/images/akad.png"
import PinImg from "../assets/images/pin.png"
import QRImg from "../assets/images/qr.png"

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 16px;
  margin-bottom: 50px;
  text-align: center;
`

const Title = styled.h2`
  margin-bottom: 8px;
  color: #927B65;
`

const SubTitle = styled.h4`
  margin-bottom: 4px;
  color: #927B65;
  font-weight: normal;
`

const Image = styled.img`
  width: 175px;
  margin: 35px auto;
`

const MapWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 24px 16px;
  margin-bottom: 25px;
  background: #595552;
`

const MapTitle = styled.h4`
  color: #D8CFC6;
  font-weight: normal;
  margin-bottom: 8px;
`

const MapText = styled.p`
  color: #D8CFC6;
  font-size: 14px;
`

const Button = styled.button`
  padding: 12px;
  border: transparent;
  border-radius: 8px;
  margin-top: 24px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  background-color: #D8CFC6;
  color: #595552;

  display: flex;
  justify-content: center;
  align-items: center;
`

function Acara() {
  return (
    <>
        <Box className="container">
            <Title>Ngunduh Mantu</Title>
            <SubTitle>Minggu, 12 Mei 2024</SubTitle>
            <SubTitle>Pukul: 09.00 - 13.00 WIB</SubTitle>

            <Image src={AkadImg} alt="photos" />

        </Box>
        <MapWrapper>
            <MapText className="mb-4">Bertempat di:</MapText>
            <MapTitle>Clubhouse JGC Jakarta Garden City</MapTitle>
            <MapText style={{ fontWeight: '300' }}>Jl. Cassia Utama, Cakung Timur, Kec. Cakung, Jakarta Timur, DKI Jakarta 13910</MapText>

            <a href="https://maps.app.goo.gl/V7FLDzRk4BA3omkt8" target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
                <Button>
                    <img src={PinImg} style={{ marginRight: '8px', width: '12px' }} alt="" />
                    Google Maps
                </Button>
            </a>

            <img src={QRImg} alt="" style={{ width: '145px', marginTop: '25px' }} />
        </MapWrapper>
    </>
  );
  }

  export default Acara
