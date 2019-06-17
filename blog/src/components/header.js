import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import Navigation from "src/components/navigation"

const StyledHeader = styled.header`
  marginbottom: 1.45rem;
`

const Container = styled.div`
  margin: 0 auto;
  maxwidth: 960;
  padding: 1.45rem 1.0875rem;
`

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <div></div>
    <Container>
      <h1>{siteTitle}</h1>
      <Navigation />
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
