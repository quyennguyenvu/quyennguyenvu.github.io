import React from 'react'

import techstacks from '@leoo/static/data/techstacks.json'
import { Grid, Typography } from '@material-ui/core'

export default function TechStack() {
  return (
    <Grid item>
      <Typography variant="h5">Tech Stacks</Typography>
      <Grid container spacing={2}>
        {techstacks.map((category, categoryId) => {
          return (
            <Grid item xs={12} key={categoryId}>
              <Typography>
                <b>{category.name}</b>
              </Typography>
              {category.items.map((item, itemId) => {
                return (
                  <React.Fragment key={`${categoryId}_${itemId}`}>
                    <Typography>{item}</Typography>
                  </React.Fragment>
                )
              })}
            </Grid>
          )
        })}
      </Grid>
    </Grid>
  )
}
