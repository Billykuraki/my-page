import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Hemlet from 'react-helmet'

import Layout from '../components/Layout'
import DisplayImage from './../assets/images/boston_mickey.jpg'
import favicon16 from "../assets/favicon-16.png"

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
          <link rel="icon" type="image/png" href={favicon16} sizes="16x16"/>
        </Hemlet>

        <p>
          Hello. I'm Billy Hsieh.
        </p>
        <p>
          I'm an experienced software developer who specializes in Android and web development. In Asus, I built the Android app used on the company's Android device.
          I also developed and maintained the in-house project management system that helps developer team to manage and track issues.
        </p>
        <p>
          I am really passionate about software development. 
          I will immigrate to the U.S. this year and am currently looking for the new opportunities in software developer position.
        </p>
        <img src={DisplayImage} alt={siteTitle} hight="600" width="400" />
        <p>Mickey and I in Fenway Park, Boston, Oct. 2018</p>
     
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
