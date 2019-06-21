import React from "react"
import Helmet from "react-helmet"
import { StaticQuery, graphql } from "gatsby"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `StaticQuery`: https://gatsby.dev/staticquery
 */

const SocialCard = ({ url, title, description, imageName, imageAlt }) => (
  <StaticQuery
    query={graphql`
      query {
        allImageSharp {
          edges {
            node {
              fixed(width: 600) {
                ...GatsbyImageSharpFixed
                originalName
              }
            }
          }
        }
      }
    `}
    render={data => {
      const image = data.allImageSharp.edges.find(
        edge => edge.node.fixed.originalName === imageName
      )
      if(image) {
        console.log(image.node.fixed.src)
      }

      const imgUrl = image
        ? `https://blog.conradj.co.uk${image.node.fixed.src}`
        : ""
      return (
        <Helmet>
          <meta name="og:type" content="article" />
          <meta name="og:headline" content={title} />
          <meta name="og:headline" content={title} />
          <meta name="og:url" content={url} />
          <meta name="og:title" content={title} />
          <meta name="og:description" content={description} />
          <meta name="og:image" content={imgUrl} />
          <meta name="og:image:alt" content={imageAlt} />
          <meta name="og:image:width" content="1000" />
          <meta name="og:image:height" content="500" />
          <meta property="og:type" content="article" />
          <meta property="og:url" content={url} />
          <meta property="og:headline" content={title} />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="og:image" content={imgUrl} />
          <meta property="og:image:alt" content={imageAlt} />
          <meta property="og:image:width" content="1000" />
          <meta property="og:image:height" content="500" />
          <meta itemprop="og:headline" content={title} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@conradj" />
          <meta name="twitter:image:alt" content={imageAlt} />
        </Helmet>
      )
    }}
  />
)

export default SocialCard
