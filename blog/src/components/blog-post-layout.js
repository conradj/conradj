import React from "react"
import Helmet from "react-helmet"
import Layout from "./layout"
import SocialCard from "./socialcard"
import Image from "./image"
import format from "date-fns/format"

const BlogPostLayout = ({ children, pageContext, location }) => {
  const { title, date, image, imageAlt, description } = pageContext.frontmatter

  return (
    <Layout>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <SocialCard
        url={location.href}
        title={title}
        description={description}
        imageName={image}
        imageAlt={imageAlt}
      ></SocialCard>
      <article>
        <Image imgName={image}></Image>
        <header>
          <h2>
            {title}
            <br />
            <small>{format(date, "dddd, MMMM Do, YYYY")}</small>
          </h2>
        </header>
        {children}
      </article>
    </Layout>
  )
}

export default BlogPostLayout
