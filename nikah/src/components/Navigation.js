import React from "react"
import styled from "styled-components";

const Box = styled.div`
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 2;
`

const Nav = styled.div`
  padding: 16px;
  background-color: #927B65;
  color: #FFFFFF;
  margin: 0 auto;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 300px;
`


function Navigation() {
    return (
      <Box>
        <Nav>
            Navigation
        </Nav>
      </Box>
    );
}
  
export default Navigation