import React from "react"
// import { Link } from "gatsby"
import "../project/project.scss"

const Project = props => (
  <React.Fragment>
    <h2>{props.data.title.text}</h2>
    <p>{props.date}</p>
    <img src={props.data.thumbnail.url} alt={props.data.thumbnail.alt} />
  </React.Fragment>
)

export default Project
