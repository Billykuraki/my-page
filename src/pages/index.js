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
          I'm a software developer who specializes in Android development. I built various Android apps for the computer hardware company located in Taiwan.
          Recently I'm learning expressJS to broaden my web-dev knowledge.
        </p>
        <p>
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
