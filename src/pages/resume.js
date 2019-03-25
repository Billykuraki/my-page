import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Layout from '../components/Layout'
import contactData from './../data/contact'
import { FaLinkedin } from 'react-icons/fa';

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

        <h2>Pei-Han (Billy) Hsieh</h2>
        <br />

        {/* {Object.keys(contactData).map(key => {
          if (contactData[key]) {
            return (
              <p>
                <b>{key}: </b>
                <a href={contactData[key]} target="_new">
                  {contactData[key]}
                </a>
              </p>
            )
          }
        })} */}

<FaLinkedin />       
<a href="http://www.linkedin.com/in/peihanhsieh" target="_new"> www.linkedin.com/in/peihanhsieh</a>
 

<div>
  <h2>Work Experience</h2>
  <h4>Software Enginner Asus Computer Inc. Aug 2014 - Feb 2019</h4>
  Zenbo: Android home robot (https://zenbo.asus.com/)
  <ul>
    <li>
      Built various system-level device settings that enable cross-functional developers to monitor feature’s toggle status.
    </li>
    <li>
      Created documentation addresses common technical issues, which reduces the amount of bugs tracking time.
    </li>
  </ul>
  Ad provider SDK: in-house ad provider Android SDK
  <ul>
    <li>
      Developed an Ad collecting SDK for internal developer teams and profiting the company over $7,000 a month.
    </li>
    <li>
      Designed and implemented thread-pool based Ad content scraper, which led to 20 mins faster Ad collection time.
    </li>
    <li>
      Utilized the Slack webhook to monitor errors and changes on the content source, which reduced the time of potential breakdown.
    </li>
  </ul>
  Asus Do It Later: To-Do List app in google play <a href="https://bit.ly/2VFiDuw" target="_new">https://bit.ly/2VFiDuw</a>
  <ul>
    <li>Built the material design UI and interaction using Android SDK that reach fifty million users in Google Play.</li>
    <li>Debugged and fixed critical defects that reported by customers and in-house testers.</li>
    <li>Wrote automated acceptance test script in calabash, which sped up software shipping process.</li>
  </ul>
  Asus Redmine: in-house project management system
  <ul>
    <li>Integrated and customized various Redmine plugins that help developer team to manage and track issues.</li>
    <li>Resolved various UI/UX defects from user feedback, which increased active internal users per month.</li>
  </ul>
</div>
<div>
  <h2>Education</h2>
<div>
</div>
  <h4>National Central University</h4>
  <ul>
    <li>
      M.B.A. in Management Information System (Information System Track)
    </li>
    <li>
      Coursework: Data Modeling, Software Engineering, Intelligent Information System.
    </li>
  </ul>
</div>

<div>
  <h4>Tamkang University</h4>
  <ul>
    <li>
      B.Ed. in Educational Technology with minor in Information Management. GPA: 3.5/4.0
    </li>
    <li>
      Coursework: Programming and Data Structures, Networks and Communications, Operating Systems, Algorithm, Database Design.
    </li>
  </ul>
</div>
<h2>Projects</h2>
<ul>
  <li>
    Personal Website: https://billykuraki.github.io/
  </li>
  <li>
    Todo-API: Back-end API that enables create, delete and update to-do. Stack includes NodeJS, MongoDB.
  </li>
  <li>
    Snake Game: Built a classic snake game using Android SDK.
  </li>
</ul>   
<div>
<h2>Skills</h2>
  <ul>
    <li>
      <b>Languages:</b> Proficient in Java, Moderate experience in JavaScript, Ruby, Python.
    </li>
    <li>
      <b>Technologies:</b> Android SDK, SQL, Docker, Ruby on Rails, HTML/CSS,
    </li>
  </ul>
</div>  
<div>
<h2>Awards & Certificate</h2>
  <ul>
    <li>
      Associate Android Developer (2017): Brush up on my Android skills (https://www.credential.net/eok0yxed)
    </li>
</ul>
</div>




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
