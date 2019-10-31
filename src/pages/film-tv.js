import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import FilmsTvHero from "../components/films-tv-hero/films-tv-hero"

const FilmTvPage = () => (
  <Layout>
    <SEO title="Film + TV" />
    <FilmsTvHero />
  </Layout>
)

export default FilmTvPage
