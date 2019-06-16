import React from "react"
import styled from "styled-components"

const Tweet = styled.div`
  blockquote {
    display: inline-block;
    font-family: "Helvetica Neue", Roboto, "Segoe UI", Calibri, sans-serif;
    font-size: 12px;
    font-weight: bold;
    line-height: 16px;
    border-color: #eee #ddd #bbb;
    border-radius: 5px;
    border-style: solid;
    border-width: 1px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);
    margin: 10px 5px;
    padding: 0 16px 16px 16px;
    max-width: 468px;
  }

  p {
    font-size: 16px;
    font-weight: normal;
    line-height: 20px;
  }

  a {
    color: inherit;
    font-weight: normal;
    text-decoration: none;
    outline: 0 none;
  }

  a:hover,
  a:focus {
    text-decoration: underline;
  }
`

export default props => <Tweet>{props.children}</Tweet>
