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
          Billy is a passionate software developer who enjoys learning different technology.
          He earned master's degree in Management Information Systems from National Central University in Taiwan and was a software engineer building Android app for consumer electronic products at Asus.
          He came to the US this year and is fresh off the boat!
        </p>
        <img src={DisplayImage} alt={siteTitle} hight="600" width="400" />
        <p>Fenway Park, Boston, Oct. 2018</p>
     
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
