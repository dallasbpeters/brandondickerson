import React from "react"

import VideoLightbox from "react-bigpicture"
import "../project/project.scss"

const Project = props => (
  <React.Fragment>
    {/* <img src={props.data.thumbnail.url} alt={props.data.thumbnail.alt} /> */}
    <VideoLightbox
      className="project-group--project"
      type="youtube"
      src={props.data.embed_link.embed_url}
    >
      <img src={props.data.thumbnail.url} alt={props.data.thumbnail.alt} />
    </VideoLightbox>
  </React.Fragment>
)

export default Project
