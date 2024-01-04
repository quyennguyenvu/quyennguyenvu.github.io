import React from 'react'

import {
  faGithubAlt,
  faLinkedinIn,
  faSkype,
  faTelegramPlane,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Container } from '@material-ui/core'

import './style.scss'

export default function Home() {
  return (
    <Container className="home-wrapper">
      <div id="stars1" className="stars"></div>
      <div id="stars2" className="stars"></div>
      <div id="stars3" className="stars"></div>

      <div className="showoff-box">
        <div className="avatar">
          <img src="/static/images/fav_avt.jpg" alt="avatar" />
        </div>

        <div className="headline">
          <h1>Nguyễn Vũ Quyền</h1>
          <h2>Software Engineer</h2>
          <a href="/#/resume" className="resume">
            Resume
          </a>
          <a className="gmail-address" href="mailto:leo.quyennguyen@gmail.com">
            leo.quyennguyen@gmail.com
          </a>
        </div>
      </div>

      <div className="social-box">
        <div className="social-buttons">
          <a
            className="social-margin"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/leo-quyennguyen"
          >
            <div className="social-icon linkedin">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </div>
          </a>

          <a
            className="social-margin"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/quyennguyenvu"
          >
            <div className="social-icon github">
              <FontAwesomeIcon icon={faGithubAlt} />
            </div>
          </a>

          <a
            className="social-margin"
            rel="noopener noreferrer"
            href="https://t.me/Quyennv"
          >
            <div className="social-icon telegram">
              <FontAwesomeIcon icon={faTelegramPlane} />
            </div>
          </a>

          <a
            className="social-margin"
            rel="noopener noreferrer"
            href="skype:vq.leonardo?chat"
          >
            <div className="social-icon skype">
              <FontAwesomeIcon icon={faSkype} />
            </div>
          </a>
        </div>
      </div>
    </Container>
  )
}
