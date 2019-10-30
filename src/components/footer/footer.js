import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./footer.scss"
import "../../scss/_buttons.scss"

const Footer = ({ siteTitle }) => {
  return (
    <footer className="site-footer">
      <h1>Last thought as you hit the end of the page.</h1>
      <p>
        Paragraph to help fill in the gaps that the above headline didn't
        communicate.
      </p>
      <div className="btn-row">
        <Link className="btn btn--primary" to="/work-with-me">
          Work With Me
        </Link>
      </div>
      © {new Date().getFullYear()} <Link to="/">{siteTitle}</Link>
    </footer>
  )
}

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
