import React from "react"
import Helmet from "react-helmet"
import { MDXProvider } from "@mdx-js/react"

import Layout from "./layout"
import SocialCard from "./socialcard"
import MDXCodeComponent from "./MDXCodeComponent"
import Img from "gatsby-image"
import format from "date-fns/format"

import { useStaticQuery, graphql } from "gatsby"

const BlogPostLayout = ({ children, pageContext, location }) => {
  const { title: blogTitle } = pageContext.frontmatter
  const data = useStaticQuery(graphql`
    query MdxQuery {
      allMdx {
        edges {
          node {
            excerpt
            frontmatter {
              title
              date
              imageAlt
              imageTitle
              image {
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
  `)
  const result = data.allMdx.edges.find(({ node }) => {
    return node.frontmatter.title === blogTitle
  })
  const { title, date, image, imageAlt, imageTitle } = result.node.frontmatter
  const { excerpt } = result.node
  return (
    <Layout>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <SocialCard
        url={location.href}
        title={title}
        description={excerpt}
        imageSrc={image.childImageSharp.fluid.src}
        imageAlt={imageAlt}
      ></SocialCard>
      <article>
        <Img
          fluid={image.childImageSharp.fluid}
          alt={imageAlt}
          title={imageTitle}
        ></Img>
        <header>
          <h2>
            {title}
            <br />
            <small>{format(date, "dddd, MMMM Do, YYYY")}</small>
          </h2>
        </header>
        <MDXProvider
          components={{
            // Map HTML element tag to React component
            code: MDXCodeComponent,
          }}
        >
          {children}
        </MDXProvider>
      </article>
    </Layout>
  )
}

export default BlogPostLayout
