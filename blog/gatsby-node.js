const fs = require("fs")
const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")

// Here we're adding extra stuff to the "node" (like the slug)
// so we can query later for all blogs and get their slug
exports.onCreateNode = async ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === "Mdx") {
    const value = createFilePath({ node, getNode })
    createNodeField({
      // Individual MDX node
      node,
      // Name of the field you are adding
      name: "slug",
      // Generated value based on filepath with "blog" prefix
      value: `/${value}`,
    })
    const { dir } = path.parse(node.fileAbsolutePath)

    const heroImage = await new Promise((res, rej) => {
      // get a list of files in `dir`
      fs.readdir(dir, (err, files) => {
        if (err) rej(err)

        // if there's a file named `hero`, return it
        res(files.find(file => file.includes("hero")))
      })
    })

    // path.relative will return a (surprise!) a relative path from arg 1 to arg 2.
    // you can use this to set up your default hero
    const heroPath = heroImage
      ? `./${heroImage}`
      : path.relative(dir, "src/images/default-hero.jpg")

    // create a node with relative path
    createNodeField({
      node,
      name: "hero",
      value: `./${heroImage}`,
    })
  }
}
