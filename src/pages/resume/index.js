import { Container, Divider, Grid, Typography } from '@material-ui/core'
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
          <Grid item xs={3} className="avatar">
            <img src="/static/images/avatar.jpg" alt="avatar" width="100%" />
          </Grid>
          <Grid item container xs={9} direction="column" justify="space-between">
            <Grid item>
              <h1>NGUYEN VU QUYEN</h1>
              <h2>Software Engineer</h2>
            </Grid>
            <Grid item>
              <h5>Ho Chi Minh - 0869225891 – leo.quyennguyen@gmail.com</h5>
            </Grid>
          </Grid>
        </Grid>

        <Grid item container spacing={3}>
          <Grid item xs={3}>
            <Typography variant="h5" align="right">
              Career Objective
            </Typography>
          </Grid>
          <Grid item container xs={9} spacing={2}>
            <Grid item>
              <Typography>
                After years in software development industry, I have been experienced with many of software languages,
                mainly building API services, websites. I enjoy learning new things in my free time. My hobbies are
                reading, playing basketball, traveling, cycling and hangout with my friends.
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Divider variant="fullWidth" />
        <Experience />

        <Divider variant="fullWidth" />
        <BasicSection title={'Tech Stacks'} categories={techstacks} />

        <Divider variant="fullWidth" />
        <BasicSection title={'Education'} categories={education} />

        {/* end resume body */}
      </Grid>
    </Container>
  )
}
