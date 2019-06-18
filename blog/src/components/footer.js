import React from "react"
import styled from "styled-components"

const StyledFooter = styled.footer`
  border-top: solid 1rem #78fecf;
  padding-bottom: 1.45rem;
`

const Footer = () => (
  <StyledFooter>
    <div
      style={{
        margin: "0 auto",
        maxWidth: 600,
        padding: "1.45rem 1.0875rem",
      }}
    >
      <h4 style={{ margin: 0, float: "left" }}>
        By{" "}
        <a
          href="https://conradj.co.uk/#contact"
          target="_blank"
          className="link-effect"
          rel="noopener noreferrer"
        >
          <span>Conrad Jackson</span>
        </a>
      </h4>
      {/* <span style={{ float: "right" }}>
        <a
          href="https://twitter.com/conradj"
          target="_blank"
          className="link-effect"
          rel="noopener noreferrer"
        >
          <span>
            <FontAwesomeIcon icon={faTwitter} />
          </span>
        </a>{" "}
        |{" "}
        <a
          href="https://github.com/conradj"
          target="_blank"
          className="link-effect"
          rel="noopener noreferrer"
        >
          <span>
            <FontAwesomeIcon icon={faGithub} />
          </span>
        </a>
      </span> */}
    </div>
  </StyledFooter>
)

export default Footer
