import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const Aside = styled.div`
    height: 100%;
    width: 30%;
    position: fixed;
    top: 0;
    left: 0;
    overflow-x: hidden;
    padding-top: 3%;
`

const Header = ({ siteTitle }) => (
  <header>
    <Aside>
      <h1 style={{ margin: 0 }}>
        <Link to="/">
          {siteTitle}
        </Link>
      </h1>
      <ul>
          <Link to="/favorites">
            <li>Favorites</li>
          </Link>
          <Link to="/portraits">
            <li>Portraits</li>
          </Link>
          <Link to="/maternity">
            <li>Maternity</li>
          </Link>
          <Link to="/events">
            <li>Events</li>
          </Link>
          <Link to ="/engagement">
             <li>Engagement</li>
          </Link>
          <Link to = "/wedding">
             <li>Wedding</li>
          </Link>
          <Link to ="/about">
             <li>About</li>
          </Link>
          <Link to ="/packages">
             <li>Packages</li>
          </Link>
          <Link to ="/contact">
             <li>Contact</li>
          </Link>

      </ul>
  </Aside>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
