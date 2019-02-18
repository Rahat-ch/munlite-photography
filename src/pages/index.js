import React from "react"
import { Link, graphql } from "gatsby"
import PropTypes from 'prop-types'

import Layout from "../components/layout"
// import SEO from "../components/seo"
import Lightbox from '../components/Lightbox'

import "../components/layout.css"
import 'react-image-lightbox/style.css';
import "../styles/styles.scss"



export const homeImageQuery = graphql`
{
allSanityHomeGallery{
edges{
  node{
      title
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
    <h1>Hi people</h1>
    <p>
      This is home page
    </p>

    <Lightbox images={data.allSanityHomeGallery.edges} />
  </Layout>
)

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
}


export default IndexPage
