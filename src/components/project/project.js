import React from "react"
import BigPictureWrapper from "../bigpicture/BigPictureWrapper.js"
import Img from "gatsby-image"
import "../project/project.scss"

const Project = props => (
  <React.Fragment>
    <BigPictureWrapper
      className="project-group--project"
      type="youtube"
      src={props.data.embed_link.embed_url}
      title={props.data.title.text}
      aria-label={props.data.title.text}
    >
      <Img
        fluid={props.data.thumbnail.localFile.childImageSharp.fluid}
        alt={props.data.title.text}
      />
      <div className="project-group--project-meta">
        <p className="project-meta__title">{props.data.title.text}</p>
        <p className="project-meta__type">
          {props.data.project_type.document[0].data.name}
        </p>
      </div>
    </BigPictureWrapper>
  </React.Fragment>
)

export default Project
