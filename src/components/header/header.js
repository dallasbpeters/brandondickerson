import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import NavigationIcon from "../../static/svg/navigation-menu.svg"
import CloseIcon from "../../static/svg/close.svg"
import "./header.scss"
import NavLinks from "../nav/navLinks"

const Header = ({ siteTitle }) => {
  const [toggleNav, setToggleNav] = React.useState(false)
  return (
    <header className="site-header">
      <h1 className="site-header--title-link">
        <div
          className="site-header--toggle-icon-wrapper"
          onClick={() => setToggleNav(!toggleNav)}
        >
          {toggleNav ? <CloseIcon /> : <NavigationIcon />}
        </div>
        <Link to="/">{siteTitle}</Link>
      </h1>
      <nav className={toggleNav ? `site-nav open` : `site-nav closed`}>
        <NavLinks />
      </nav>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
