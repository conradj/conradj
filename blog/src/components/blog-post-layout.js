import React from "react"
import Helmet from "react-helmet"
import Layout from "./layout"
import SocialCard from "./socialcard"
import format from "date-fns/format"

function BlogPostLayout({ children, pageContext }) {
  const { title, date } = pageContext.frontmatter
  return (
    <Layout>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      {/* <SocialCard url={url} title={title} description={description} imageUrl={imageUrl} imageAlt={imageAlt}></SocialCard> */}
      <article>
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
