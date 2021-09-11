import { faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Container, Divider, Grid, Hidden, Typography } from '@material-ui/core'
import React from 'react'
import BasicSection from './components/basicSection'
import Experience from './components/experience'
import education from './data/education.json'
import techstacks from './data/techstacks.json'
import './style.scss'

export default function Resume() {
  return (
    <Container maxWidth="md" className="resume-wrapper">
      <Grid container className="resume-body" spacing={5} direction="column">
        <Grid item container spacing={3} className="bio">
          <Hidden only={['xs', 'sm']}>
            <Grid item md={3} className="avatar">
              <img src="/static/images/avatar.jpg" alt="avatar" width="100%" />
            </Grid>
          </Hidden>
          <Grid item container md={8} xs={12} direction="column" justifyContent="space-between">
            <Grid item>
              <h1>NGUYEN VU QUYEN</h1>
              <h2>Software Engineer</h2>
            </Grid>
            <Grid item>
              <h5>Ho Chi Minh - 0869225891 – leo.quyennguyen@gmail.com</h5>
            </Grid>
          </Grid>
          <Hidden only={['xs', 'sm']}>
            <Grid item md={1}>
              <a href="/#/">
                <FontAwesomeIcon icon={faHome} />
              </a>
            </Grid>
          </Hidden>
        </Grid>

        <Grid item container spacing={3}>
          <Grid item xs={12} md={3}>
            <Typography variant="h5" className="heading">
              Career Objective
            </Typography>
          </Grid>
          <Grid item container xs={12} md={9} spacing={2}>
            <Grid item>
              <Typography>
                Seeking a challenging position in an organization where I can use my knowledge and skills to grow and
                expand an organization as well as myself.
              </Typography>
              <Typography>
                Mentor and guide team members, setting strategy and monitoring progress towards goals.
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Divider variant="fullWidth" />
        <Experience />

        <Divider variant="fullWidth" />
        <BasicSection heading={'Tech Stacks'} categories={techstacks} />

        <Divider variant="fullWidth" />
        <BasicSection heading={'Education'} categories={education} />

        {/* end resume body */}
      </Grid>
    </Container>
  )
}
