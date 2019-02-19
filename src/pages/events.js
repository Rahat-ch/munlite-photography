import React from "react"
import { graphql } from "gatsby"
import PropTypes from 'prop-types'

import Layout from "../components/layout"
// import SEO from "../components/seo"
import Lightbox from '../components/Lightbox'

import "../components/layout.css"
import 'react-image-lightbox/style.css';
import "../styles/styles.scss"



export const eventsImageQuery = graphql`
{
allSanityEventsGallery{
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

const EventsPage = ({ data }) => (
  <Layout>
    <Lightbox images={data.allSanityEventsGallery.edges} />
  </Layout>
)

EventsPage.propTypes = {
  data: PropTypes.object.isRequired,
}


export default EventsPage
