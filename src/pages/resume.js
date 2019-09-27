import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { withPrefix } from 'gatsby'

import Layout from '../components/Layout'

class Resume extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const siteDescription = get(
      this,
      'props.data.site.siteMetadata.description'
    )

    return (
      <Layout>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={`Resume | ${siteTitle}`}
        />
        <iframe src="https://resume.creddle.io/embed/35emvi3bx7b" width="850" height="1100" seamless></iframe>
      </Layout>
    )
  }
}

export default Resume

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
