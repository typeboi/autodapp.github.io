import React from "react"
import { Link, graphql } from "gatsby"
import tw from "twin.macro"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"


const Billboard = tw.div`
  bg-white
  rounded-lg
  overflow-hidden
  border
`

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <Billboard />
      <section className="text-center">
        <h2 className="bg-yellow-400 text-2xl font-bold inline-block my-8 p-3">
          Hey there! Welcome to your first Gatsby site.
        </h2>

        <p className="leading-loose">
          This is a barebones starter for Gatsby styled using{` `}
          <a
            className="font-bold no-underline text-gray-900"
            href="https://tailwindcss.com/"
          >
            Tailwind
          </a>
          , a utility-first CSS framework.
        </p>
      </section>
      <Bio />
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <article key={node.fields.slug}>
            <header>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                }}
              >
                <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
              <small>{node.frontmatter.date}</small>
            </header>
            <section>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
            </section>
          </article>
        )
      })}
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
