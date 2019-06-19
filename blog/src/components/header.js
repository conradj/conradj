import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Avatar from "./avatar"

const StyledHeader = styled.header`
  border-top: solid 4px #d81159;
  border-bottom: solid 1px #78fecf;
`

const Container = styled.div`
  max-width: 600px;
  margin: 1rem auto;
  display: flex;
  font-size: 1.5rem;
  padding: "1.45rem 1.0875rem";
`

const StyledEnd = styled.div`
  width: 100px;
`

const StyledMiddle = styled.div`
  flex: 1;
  text-align: right;
  margin-bottom: 0;
  align-self: flex-end;
`

const StyledH1 = styled.h1`
  font-family: monospace;
  font-size: 0.8rem;
  margin: 0rem;
`

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <Container>
      <StyledEnd>
        <Link to="/">
          <Avatar />
        </Link>
      </StyledEnd>
      <StyledMiddle>
        <StyledH1>conrad is null or not an object</StyledH1>
      </StyledMiddle>
    </Container>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
