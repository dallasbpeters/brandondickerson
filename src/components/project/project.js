import React from "react"
// import { Link } from "gatsby"
import "../project/project.scss"

const Project = props => (
  <div className="project-group--project">
    <img src={props.data.thumbnail.url} alt={props.data.thumbnail.alt} />
  </div>
)

export default Project
