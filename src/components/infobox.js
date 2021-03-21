import { faGithubAlt, faLinkedinIn, faSkype, faTelegramPlane } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import avatar from '../static/images/avatar.jpg'
import curriculum from '../static/docs/QuyenNguyen_CV.pdf'

export default function InfoBox() {
  return (
    <>
      <div className="container">
        <div className="avatar">
          <img src={avatar} alt="avatar" />
        </div>

        <div className="headline">
          <h1>Nguyễn Vũ Quyền (Leo)</h1>
          <h2>Software Engineer</h2>
          <a className="mb5 highlight" href="mailto:leo.quyennguyen@gmail.com">
            leo.quyennguyen@gmail.com
          </a>
          <a href={curriculum} target="_blank" className="highlight" rel="noopener noreferrer">
            Curriculum Vitae
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

          <a className="social-margin" rel="noopener noreferrer" href="https://t.me/Quyennv">
            <div className="social-icon telegram">
              <FontAwesomeIcon icon={faTelegramPlane} />
            </div>
          </a>

          <a className="social-margin" rel="noopener noreferrer" href="skype:vq.leonardo?chat">
            <div className="social-icon skype">
              <FontAwesomeIcon icon={faSkype} />
            </div>
          </a>
        </div>
      </div>
    </>
  )
}
