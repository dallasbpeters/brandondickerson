import { Link } from "gatsby"
import React from "react"

const NavLinks = () => (
  <React.Fragment>
    <Link to="/film-tv" className="site-nav--link" activeClassName="active">
      Films + TV
    </Link>
    <Link to="/music-video" className="site-nav--link" activeClassName="active">
      Music Video
    </Link>
    <Link to="/spots" className="site-nav--link" activeClassName="active">
      Spots
    </Link>
    <Link
      to="/storytelling"
      className="site-nav--link"
      activeClassName="active"
    >
      Storytelling
    </Link>
    <Link to="/about" className="site-nav--link" activeClassName="active">
      About
    </Link>
    <Link
      to="/work-with-me"
      className="site-nav--link btn"
      activeClassName="active"
    >
      Work With Me
    </Link>
  </React.Fragment>
)

export default NavLinks
