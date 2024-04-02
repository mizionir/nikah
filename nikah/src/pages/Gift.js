import React from "react"
import styled from "styled-components";
import GiftImg from "../assets/images/gift.png"
import GiftSeparatorImg from "../assets/images/gift-separator.png"
import CopyImg from "../assets/images/copy.png"


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

const SubTitle = styled.p`
  margin-bottom: 4px;
`

const Image = styled.img`
  width: 100px;
  margin: 25px auto;
`

const Text = styled.h5`
  font-size: 16px;
  margin-bottom: 8px;
`

const Button = styled.button`
  max-width: 200px;
  margin: 15px auto;
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

function Gift() {
    const copyToClipboard = async (text) => {
        try {
          await navigator.clipboard.writeText(text);
          return true;
        } catch (err) {
          return false;
        }
      };

  return (
    <>
        <Box className="container">
            <Image src={GiftImg} alt="photos" />
            <Title>Wedding Gift</Title>
            <SubTitle>Doa restu anda merupakan karunia yang sangat berarti bagi kami dan jika memberi adalah ungkapan tanda terimakasih anda, anda dapat memberi kado secara cashless.</SubTitle>

            <Image src={GiftSeparatorImg} alt="" style={{ width: '125px' }} />
            <Text>BANK MANDIRI</Text>
            <Text>1560 0128 217 26</Text>
            <Text>CITRA YULIANITA</Text>

            <Button onClick={() => copyToClipboard('1560012821726')}>
                <img src={CopyImg} style={{ marginRight: '8px', width: '16px' }} alt="" />
                Salin Nomor
            </Button>
        </Box>
    </>
  );
}

export default Gift