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
            <a href="mailto:leo.quyennguyen@gmail.com">leo.quyennguyen@gmail.com</a>
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

            <a className="social-margin" target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/leo.quyennv">
              <div className="social-icon facebook">
                <FontAwesomeIcon icon={['fab', 'facebook-f']} />
              </div>
            </a>
          </div>
        </div>

      </Router>
    );
  }
}

export default InfoBox;