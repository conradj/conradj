import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const StyledHeader = styled.header`
  border-top: solid 4px #d81159;
  border-bottom: solid 1px #78fecf;
  padding: 0.45rem 1rem;
  display: flex;
  font-size: 1.5rem;
`

const Navigation = styled.nav`
  margin: 0 auto;
  maxwidth: 960;
  padding: 1.45rem 1.0875rem;
`

const StyledEnd = styled.div`
  font-size: 0.5rem;
  width: 100px;
`

const StyledMiddle = styled.div`
  flex: 1;
  text-align: center;
  margin-bottom: 0;
`

const StyledH1 = styled.h1`
  margin: 0rem;
`

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <StyledEnd></StyledEnd>
    <StyledMiddle>
      <StyledH1>Conrad is null or not an object</StyledH1>
    </StyledMiddle>
    <StyledEnd>
      <a href="https://www.conradj.co.uk">back</a>
    </StyledEnd>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
