import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Hemlet from 'react-helmet'

import Layout from '../components/Layout'
import DisplayImage from './../assets/images/boston_mickey.png'

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
        I' am a Software Engineer who specialezes in Android and web development.
        
        Prevous I worked at Asus, where I built the android app used on the company's Android device.
        I am also developed and maintained the in-house project management system that enables developer team for issues planning and tracking.<br/>
        I am really passionate about software develpopent. will move to the U.S. this year and would love to have the opportunity to work with the teams to make the XXXX better
        </p>
              
        <img src={DisplayImage} alt={siteTitle} hight="600" width="400" />
     
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
