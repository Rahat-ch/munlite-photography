import React from "react"
import { graphql } from "gatsby"
import PropTypes from 'prop-types'

import Layout from "../components/layout"
// import SEO from "../components/seo"
import Lightbox from '../components/Lightbox'

import "../components/layout.css"
import 'react-image-lightbox/style.css';
import "../styles/styles.scss"



export const portraitsImageQuery = graphql`
{
allSanityPortraitsGallery{
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

const PortraitsPage = ({ data }) => (
  <Layout>
    <Lightbox images={data.allSanityPortraitsGallery.edges} />
  </Layout>
)

PortraitsPage.propTypes = {
  data: PropTypes.object.isRequired,
}


export default PortraitsPage
