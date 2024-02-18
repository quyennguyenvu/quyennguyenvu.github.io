import React from 'react'

import experience from '@leoo/static/data/experience.json'
import { Grid, Typography } from '@material-ui/core'

export default function Experience() {
  return (
    <Grid container direction="column" spacing={3}>
      <Grid item>
        <Typography variant="h5">Work Experience</Typography>
      </Grid>

      <Grid item>
        <Grid container direction="column" spacing={2}>
          {experience.map((exp, expId) => {
            return (
              <Grid item key={expId}>
                <Typography variant="h6">{exp.title}</Typography>
                <Typography>
                  <b>{exp.company}</b>
                </Typography>
                <Typography>
                  {exp.period} / {exp.location}
                </Typography>
                <Typography>
                  <b>Tech stacks: </b>
                  {exp.techstack}
                </Typography>
                {exp.achievements && (
                  <ul className="achievements">
                    {exp.achievements.map((acm, acmId) => {
                      return (
                        <React.Fragment key={`${expId}_${acmId}`}>
                          <li>
                            <Typography>{acm}</Typography>
                          </li>
                        </React.Fragment>
                      )
                    })}
                  </ul>
                )}
              </Grid>
            )
          })}
        </Grid>
      </Grid>
    </Grid>
  )
}
