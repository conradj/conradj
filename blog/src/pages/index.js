import format from "date-fns/format"
import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"

function BlogIndex({ data }) {
  const { edges: posts } = data.allMdx
  return (
    <Layout>
      {posts.map(({ node }) => {
        const { title, date } = node.frontmatter
        const { hero } = node.fields
        return (
          <div key={node.id}>
            <header>
              <div>
                <Img fixed={hero.childImageSharp.fixed} />
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
            hero {
              childImageSharp {
                # Specify the image processing specifications right in the query.
                # Makes it trivial to update as your page's design changes.
                fixed(width: 600) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
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
