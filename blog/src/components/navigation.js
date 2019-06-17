import React from "react"
import { Link as GatsbyLink } from "gatsby"
import styled from "styled-components"

const Navigation = styled.ul`
  padding: 0;
  list-style: none;
  display: flex;
  height: 46px;
  align-items: center;
  padding: 0 10px;
  border: 1px solid rgba(238, 238, 238, 1);
  border-radius: 5px;
  color: rgba(117, 117, 117, 1);
  box-shadow: 5px 10px 20px -20px rgba(85, 172, 238, 1);
`

const NavItem = styled.li`
  cursor: pointer;
  margin: 1rem;
`

const StyledLink = styled.a`
  font-family: "Montserrat";
  color: rgb(34, 34, 34);
  font-size: 1rem;
`

const StyledGatsbyLink = styled(GatsbyLink)`
  font-family: "Montserrat";
  color: rgb(34, 34, 34);
  font-size: 1rem;
`

export default () => (
  <Navigation role="navigation">
    <NavItem>
      <StyledLink href="https://www.conradj.co.uk">
        Back to conradj.co.uk
      </StyledLink>
    </NavItem>
    <NavItem>
      <StyledGatsbyLink to="/">Blog Home</StyledGatsbyLink>
    </NavItem>
  </Navigation>
)
