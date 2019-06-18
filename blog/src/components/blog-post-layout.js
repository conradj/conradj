import React from "react"
import Helmet from "react-helmet"
import Layout from "./layout"
import format from "date-fns/format"

function BlogPostLayout({ children, pageContext }) {
  const { title, date } = pageContext.frontmatter
  return (
    <Layout>
      <Helmet>
        <title>{title}</title>
      </Helmet>
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
