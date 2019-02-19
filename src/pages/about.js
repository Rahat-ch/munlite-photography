import React from "react"
import PropTypes from 'prop-types'

import Layout from "../components/layout"
import Image from 'gatsby-image';
// import SEO from "../components/seo"

import "../components/layout.css"
import 'react-image-lightbox/style.css';
import "../styles/styles.scss"
import styled from 'styled-components'

const Aboutblurb = styled.div`
margin-left: 30%;
padding-top: 3%;
margin-right: 1.2rem;
`

export const aboutImageQuery = graphql`
{
    allSanityAboutImage {
        edges {
          node {
            image {
              asset {
                fluid {
                  ...GatsbySanityImageFluid
                }
              }
            }
          }
        }
      }
}
`


const AboutPage = ({data}) => (
  <Layout>
    <Aboutblurb>
        {/* {data.allSanityProject.edges.map(({ node: project }) => (

        <Image fluid={project.image.asset.fluid} alt="hasibaProfile" />

        ))} */}
        Lorem ipsum dolor amet cardigan subway tile plaid put a bird on it tattooed fashion axe jean shorts forage tote bag vice humblebrag messenger bag. Coloring book af salvia cray health goth normcore cred ethical skateboard franzen church-key actually gastropub. Waistcoat bespoke hot chicken jianbing pickled, aesthetic yr mlkshk hexagon locavore. Offal art party tote bag woke, messenger bag marfa you probably haven't heard of them. Tumeric messenger bag vape cray synth gochujang cornhole tbh kitsch kogi sartorial. Marfa actually vice semiotics microdosing.

Palo santo selvage taxidermy, echo park copper mug sriracha yr. Echo park gastropub waistcoat blog kale chips actually cred meditation iPhone. Activated charcoal lumbersexual lo-fi keytar flexitarian, gochujang cray VHS. Tote bag trust fund woke, squid brunch shabby chic viral pok pok pinterest. Aesthetic craft beer hoodie flannel. Man bun knausgaard taiyaki organic four dollar toast. Direct trade artisan small batch mlkshk normcore succulents banjo four dollar toast helvetica slow-carb bushwick.

Bicycle rights retro gentrify, offal ramps XOXO bushwick woke taxidermy paleo vegan blue bottle tote bag. Vaporware man bun dreamcatcher activated charcoal ethical pop-up typewriter. Chambray celiac kitsch godard. Raclette unicorn portland skateboard meditation.

Live-edge microdosing helvetica, glossier activated charcoal jean shorts viral. Lumbersexual umami twee deep v blog adaptogen ramps tilde letterpress. Raw denim church-key 90's, edison bulb twee actually master cleanse vinyl offal four loko vice flexitarian small batch. Iceland copper mug heirloom selfies. Shabby chic knausgaard umami drinking vinegar, chartreuse selfies austin pug aesthetic.

Occupy la croix enamel pin mixtape farm-to-table. Organic before they sold out meditation air plant etsy scenester forage health goth. Pok pok hammock taxidermy man bun, edison bulb semiotics lyft synth sustainable. Palo santo selfies mustache occupy. Seitan ramps health goth microdosing whatever small batch pinterest selfies four dollar toast everyday carry gochujang 8-bit next level pabst post-ironic.

Oh. You need a little dummy text for your mockup? How quaint.

I bet you’re still using Bootstrap too…
</Aboutblurb>
  </Layout>
)

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}


export default AboutPage
