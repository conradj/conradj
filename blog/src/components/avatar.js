import React from "react"
import styled from "styled-components"

const StyledAvatar = styled.div`
  margin: 10px;
  border: 3px solid rgba(150, 180, 150, 0.8);
  border-radius: 50%;
  height: 73px;
  width: 73px;
  box-shadow: 1px 1px 4px 0px rgba(0, 0, 0, 0.75) inset;

  img {
    position: relative;
    width: 100%;
    border-radius: 50%;
    z-index: -1;
  }
`

const Avatar = () => (
  <StyledAvatar>
    <img src="https://conradj.co.uk/images/heads/me1.jpg" />
  </StyledAvatar>
)

export default Avatar
