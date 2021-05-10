import { Divider, Grid, Typography } from '@material-ui/core'
import React from 'react'
import experience from '../data/experience.json'

export default function Experience() {
  return (
    <Grid item container spacing={3}>
      <Grid item xs={12} md={3}>
        <Typography variant="h5" className="headings">
          Experience
        </Typography>
      </Grid>

      <Grid item container xs={12} md={9} direction="column" spacing={2}>
        {experience.map((exp, expId) => {
          return (
            <React.Fragment key={expId}>
              <Grid item container direction="column" spacing={1}>
                <Grid item container alignItems="center">
                  <Grid item xs={12} md={6}>
                    <Typography className="highlight" variant="h6">
                      {exp.company}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Typography className="period">{exp.period}</Typography>
                  </Grid>
                </Grid>
                {exp.projects.map((proj, projId) => {
                  return (
                    <React.Fragment key={`${expId}_${projId}`}>
                      <Grid item>
                        <Typography className="project">{proj.name}</Typography>
                        <Typography className="description">{proj.description}</Typography>
                        <ul className="contributes">
                          {proj.contributes.map((ctb, ctbId) => {
                            return (
                              <React.Fragment key={`${expId}_${projId}_${ctbId}`}>
                                <li>
                                  <Typography>{ctb}</Typography>
                                </li>
                              </React.Fragment>
                            )
                          })}
                        </ul>
                        <Typography color="primary" className="techstack">
                          {proj.techstack}
                        </Typography>
                      </Grid>
                      {projId < exp.projects.length - 1 && <Divider variant="middle" />}
                    </React.Fragment>
                  )
                })}
              </Grid>
              {expId < experience.length - 1 && <Divider />}
            </React.Fragment>
          )
        })}
      </Grid>
    </Grid>
  )
}
