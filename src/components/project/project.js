import React from "react"

import BigPictureWrapper from "../bigpicture/BigPictureWrapper.js"
import "../project/project.scss"

const Project = props => (
  <React.Fragment>
    <BigPictureWrapper
      className="project-group--project"
      type="youtube"
      src={props.data.embed_link.embed_url}
    >
      <img src={props.data.thumbnail.url} alt={props.data.thumbnail.alt} />
    </BigPictureWrapper>
  </React.Fragment>
)

export default Project
