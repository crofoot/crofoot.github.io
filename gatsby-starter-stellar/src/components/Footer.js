import { Link } from 'gatsby'
import React from 'react'

const Footer = props => (
  <footer id="footer">
    <section>
      <h2>Contact Me!</h2>
      <p>
        If you have any questions about me, projects I've done or my background,
        feel free to reach out to me over email or through linkedin! 
      </p>  
    </section>
    <section>
      <h2>Contact Information</h2>
      <dl className="alt">
        <dt>Area</dt>
        <dd>Annapolis, Maryland</dd>
        <dt>Email</dt>
        <dd>
          <a href="https://codebushi.com">dev.crofoot@gmail.com</a>
        </dd>
      </dl>
      <ul className="icons">
        {/* <li>
          <a
            href="https://twitter.com/huntaroSan"
            className="icon fa-twitter alt"
          >
            <span className="label">Twitter</span>
          </a>
        </li>
        <li>
          <a href="https://codebushi.com" className="icon fa-facebook alt">
            <span className="label">Facebook</span>
          </a>
        </li>
        <li>
          <a href="https://codebushi.com" className="icon fa-instagram alt">
            <span className="label">Instagram</span>
          </a>
        </li> */}
        <li>
          <a
            href="https://github.com/crofoot/react-apollo-notifications"
            className="icon fa-github alt"
          >
            <span className="label">GitHub</span>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/dominic-crofoot-200756112/" className="icon fa-linkedin alt">
            <span className="label">Linkedin</span>
          </a>
        </li>
      </ul>
    </section>
  </footer>
)

export default Footer
