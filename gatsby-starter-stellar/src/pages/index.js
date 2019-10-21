import React from 'react'
import Helmet from 'react-helmet'
import { Waypoint } from 'react-waypoint'
import pic01 from '../assets/images/me.jpg'
import Header from '../components/Header'
import Layout from '../components/layout'
import Nav from '../components/Nav'

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      stickyNav: false,
    }
  }

  _handleWaypointEnter = () => {
    this.setState(() => ({ stickyNav: false }))
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }))
  }

  render() {
    return (
      <Layout>
        <Helmet title="Gatsby Starter - Stellar" />

        <Header />

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        ></Waypoint>
        <Nav sticky={this.state.stickyNav} />

        <div id="main">
          <section id="intro" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>About me</h2>
                </header>
                <p>
                  I am a full stack developer who enjoys developing clean and efficient software. I graduated from the University of Maryland, Baltimore County in the Spring of 2019 with a Bachelor's degree in Computer Science.
                  I am currently working as a full stack developer for the Anne Arundel County Government, Department of OIT.
                </p>
              </div>
              <span className="image">
                <img src={pic01} alt="" />
              </span>
            </div>
          </section>

          <section id="first" className="main special">
            <header className="major">
              <h2>Experience</h2>
              <p>
                Below I have provided some details of my past and current work experiences, and the technology I specialize in!
              </p>
            </header>
            <ul className="statistics">
              <li className="style1">
                <span className="icon fa-terminal"></span>
                <strong>Full Stack Development Intern</strong>  Oct 2016 - Sept 2019
                </li>
              {/* <li className="style2">
                <span className="icon fa-folder-open-o"></span>
                <strong>8,192</strong> Magna
              </li>
              <li className="style3">
                <span className="icon fa-signal"></span>
                <strong>2,048</strong> Tempus
              </li> */}
              <li className="style4">
                <span className="icon fa-laptop"></span>
                <strong>Full Stack Developer</strong> Oct 2019 - Present
              </li>
              {/* <li className="style5">
                <span className="icon fa-diamond"></span>
                <strong>1,024</strong> Nullam
              </li> */}
            </ul>
            <p>
              Languages > Java, Javascript (ES6), Typescript, HTML, CSS, Python
            </p>
            <p>
              Server Technology > MongoDB, SQL Server, Virtualbox, Tomcat, Docker, AWS
            </p>
            <p>
              Tools & Platforms > Git, Github, Bitbucket, Jira, Google Dev Console, Toad, Postman, TravisCI
            </p>
            <p>
              Libraries & Frameworks > React Native, GraphQL, React, Redux, Expo, TypeORM, Apollo, jQuery, Struts 2, Hibernate, Express, Type-GraphQL, Maven, Bootstrap
            </p>
          </section>
          <section id="second" className="main special">
            <header className="major">
              <h2>Projects</h2>
            </header>
            <ul className="features">
              <li>
                <span className="icon major style1 fa-code"></span>
                <h3>Inventory Tracking Web Application</h3>
                <p>
                  Web application for inventory mobile applications.
                  This handled uploads and visuals to view the progress of how much inventory was scanned.
                </p>
              </li>
              <li>
                <span className="icon major style3 fa-github"></span>
                <h3>react-apollo-notifications </h3>
                <p>
                  React notification component that takes a GraphQL subscription query
                </p>
              </li>
              <li>
                <span className="icon major style5 fa-mobile"></span>
                <h3>Inventory Scanner</h3>
                <p>
                  Scanner application for doing inventory. It used barcodes to track inventory and geocode each item.
                  On and offline ability to view inventory that needed to be scanned.
                </p>
              </li>
            </ul>
            <footer className="major">
              <ul className="actions">
                <li>
                  <a href='https://github.com/crofoot/react-apollo-notifications' className="button">
                    <i className="fa fa-github" style={{paddingRight : '5px'}}></i>
                    checkout package on github!
                  </a>
                </li>
              </ul>
            </footer>
          </section>
          <section id="cta" className="main special">
            <header className="major">
              <h2>Resume</h2>
            </header>
            <footer className="major">
              <ul className="actions">
                <li>
                  <a href="/Crofoot-Dominic-Resume.pdf" className="button">
                    Learn More
                  </a>
                </li>
              </ul>
            </footer>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Index
