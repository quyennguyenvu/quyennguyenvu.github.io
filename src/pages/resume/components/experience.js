import { Divider, Grid, Typography } from '@material-ui/core'
import React from 'react'
import experience from '@/static/data/experience.json'

export default function Experience() {
  return (
    <Grid container direction="column" spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h5">Work Experience</Typography>
      </Grid>

      <Grid item container xs={12} direction="column" spacing={2}>
        {experience.map((exp, expId) => {
          return (
            <Grid item container direction="column" key={expId}>
              <Typography variant="h6">{exp.title}</Typography>
              <Typography>
                <b>{exp.company}</b>
              </Typography>
              <Typography>
                {exp.period} / {exp.location}
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
  )
}
