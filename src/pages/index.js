import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Hemlet from 'react-helmet'

import Layout from '../components/Layout'
import DisplayImage from './../assets/images/main_image.jpg'

class SiteIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const siteDescription = get(
      this,
      'props.data.site.siteMetadata.description'
    )

    return (
      <Layout>
        <Hemlet>
          <title>{siteTitle}</title>
          <meta name="description" content={siteDescription} />
        </Hemlet>
        <p>
        Billy is a Software Engineer with four years of experience developing android app and one year.<br/>
        In Asus, he built the android app used on the company's Android-based device for user experience improvement.<br/>
        He developed and maintained the in-house project management system that enables developer team for issues planning and tracking.<br/>
        He's really passionate about software develpopent. He will move to the U.S. this year and would love to have the opportunity to work with the teams to make the XXXX better
        </p>
        <img src={DisplayImage} alt={siteTitle} hight="800" width="400" />
      </Layout>
    )
  }
}

export default SiteIndex

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
