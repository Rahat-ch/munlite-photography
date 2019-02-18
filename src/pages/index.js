import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "gatsby-image"
import SEO from "../components/seo"

import "../components/layout.css"
import "../styles/styles.scss"

export const homeImageQuery = graphql`
{
allSanityHomeGallery{
edges{
  node{
    image{
      asset{
        fluid{
          ...GatsbySanityImageFluid
        }
      }
    }
  }
}
}
}
`

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <ul>
        {data.allSanityHomeGallery.edges.map(({ node: photo }) => (
            <li
                key={photo.title}>
                <Image fluid={photo.image.asset.fluid} alt={photo.title} />
            </li>
        ))}
    </ul>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
    </div>
    <Link to="/favorites/">Go to page 2</Link>
  </Layout>
)



export default IndexPage
