import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './fontawesome';

class InfoBox extends React.Component {
  render() {
    return (
      <Router>
        <div className="container">
          <div className="avatar">
            <img src={process.env.PUBLIC_URL + "/images/avatar.jpg"} alt="avatar" />
          </div>

          <div className="headline">
            <h1>Nguyễn Vũ Quyền (Leo)</h1>
            <h2>Software Engineer</h2>
            <a className="mb5" href="mailto:leo.quyennguyen@gmail.com">leo.quyennguyen@gmail.com</a>
            <a href={process.env.PUBLIC_URL + "/docs/QuyenNguyen_CV.pdf"} target="_blank" rel="noopener noreferrer">Curriculum Vitae</a>
          </div>
        </div>

        <div className="social-box">
          <div className="social-buttons">

            <a className="social-margin" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/leo-quyennguyen/">
              <div className="social-icon linkedin">
                <FontAwesomeIcon icon={['fab', 'linkedin-in']} />
              </div>
            </a>

            <a className="social-margin" target="_blank" rel="noopener noreferrer" href="https://github.com/quyennguyenvu">
              <div className="social-icon github">
                <FontAwesomeIcon icon={['fab', 'github-alt']} />
              </div>
            </a>

            <a className="social-margin" rel="noopener noreferrer" href="https://t.me/Quyennv">
              <div className="social-icon telegram">
                <FontAwesomeIcon icon={['fab', 'telegram-plane']} />
              </div>
            </a>

            <a className="social-margin" rel="noopener noreferrer" href="skype:vq.leonardo?chat">
              <div className="social-icon skype">
                <FontAwesomeIcon icon={['fab', 'skype']} />
              </div>
            </a>

          </div>
        </div>

      </Router>
    );
  }
}

export default InfoBox;