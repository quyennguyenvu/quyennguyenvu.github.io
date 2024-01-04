import React from 'react'

import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import {
  faHome,
  faFilePdf,
  faEnvelope,
  faPhone,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Container, Grid, Hidden, Typography } from '@material-ui/core'
import { PDFDownloadLink } from '@react-pdf/renderer'

import Experience from './components/experience'
import TechStack from './components/techstack'
import ResumePDF from '../resume_pdf'
import './style.scss'

export default function Resume() {
  return (
    <Container maxWidth="md" className="resume-wrapper">
      <Hidden only={['xs', 'sm']}>
        <Grid item className="home-button">
          <a href="/#/">
            <FontAwesomeIcon icon={faHome} />
          </a>
          <PDFDownloadLink
            document={<ResumePDF />}
            fileName="NguyenVuQuyen-Resume.pdf"
          >
            <FontAwesomeIcon icon={faFilePdf} />
          </PDFDownloadLink>
        </Grid>
      </Hidden>
      <Grid container className="resume-body" spacing={6} direction="column">
        <Grid item className="name">
          <h1>NGUYEN VU QUYEN</h1>
        </Grid>
        <Grid item className="title">
          <h2>Senior Software Engineer</h2>
        </Grid>

        <Grid item>
          <Grid container spacing={6} direction="row">
            <Grid item xs={12} md={4} className="left-grid">
              <Grid container spacing={3} direction="column">
                <Grid item>
                  <Typography variant="h5">Contact</Typography>
                  <Typography>
                    leo.quyennguyen@gmail.com
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className="contact-icon"
                    />
                  </Typography>
                  <Typography>
                    (+84) 869225891
                    <FontAwesomeIcon icon={faPhone} className="contact-icon" />
                  </Typography>
                  <Typography>
                    Ho Chi Minh City
                    <FontAwesomeIcon
                      icon={faLocationDot}
                      className="contact-icon"
                    />
                  </Typography>
                  <Typography>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://github.com/quyennguyenvu"
                    >
                      Github
                    </a>
                    <FontAwesomeIcon icon={faGithub} className="contact-icon" />
                  </Typography>
                  <Typography>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.linkedin.com/in/leo-quyennguyen"
                    >
                      Linkedin
                    </a>
                    <FontAwesomeIcon
                      icon={faLinkedinIn}
                      className="contact-icon"
                    />
                  </Typography>
                </Grid>

                <Grid item>
                  <Typography variant="h5">Education</Typography>
                  <Typography>Master&#39;s Degree</Typography>
                  <Typography>Computer Engineering</Typography>
                  <Typography>
                    Hanoi University of Science and Technology
                  </Typography>
                  <Typography>September 2016 - October 2018</Typography>
                  <Typography>Hanoi</Typography>
                </Grid>

                <Grid item>
                  <Typography variant="h5">Languages</Typography>
                  <Typography>Native: Vietnamese</Typography>
                  <Typography>Foreign: English</Typography>
                </Grid>

                <TechStack />
              </Grid>
            </Grid>

            <Grid item xs={12} md={8} className="right-grid">
              <Experience />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  )
}
