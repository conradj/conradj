import format from "date-fns/format"
import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"

function BlogIndex({ data }) {
  const { edges: posts } = data.allMdx
  return (
    <Layout>
      {posts.map(({ node }) => {
        const { title, date, image, author } = node.frontmatter
        return (
          <div key={node.id}>
            <header>
              <div>
                <Img fluid={image.childImageSharp.fluid} />
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
            image {
              id
              childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
