import format from "date-fns/format"
import React from "react"
import styled from "styled-components"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"

function BlogIndex({ data }) {
  const { edges: posts } = data.allMdx
  return (
    <Layout>
      {posts.map(({ node }) => {
        const { title, author, date } = node.frontmatter
        return (
          <div key={node.id}>
            <header>
              <div>
                <h2>
                  {title}
                  <br />
                  <small>{format(date, "dddd, MMMM Do, YYYY")}</small>
                </h2>
              </div>
            </header>
            <p>{node.excerpt}</p>
            <Link to={node.fields.slug}>View Article</Link>
            <hr />
          </div>
        )
      })}
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query blogIndex {
    allMdx {
      edges {
        node {
          id
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            author
            date
          }
        }
      }
    }
  }
`
