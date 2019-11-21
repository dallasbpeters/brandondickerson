import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Awards from "../components/awards-hero/awards-hero"
import SpotsLogos from "../components/spots/spots-logos"

const SpotsPage = () => (
  <Layout>
    <SEO title="Spots" />
    <Awards />
    <SpotsLogos />
  </Layout>
)

export default SpotsPage
