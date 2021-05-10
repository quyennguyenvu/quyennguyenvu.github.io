import { Grid, Typography } from '@material-ui/core'
import React from 'react'

export default function BasicSection({ heading, categories }) {
  return (
    <Grid item container spacing={3}>
      <Grid item xs={12} md={3}>
        <Typography variant="h5" className="heading">
          {heading}
        </Typography>
      </Grid>
      <Grid item container xs={12} md={9} direction="column">
        {categories.map((category, categoryId) => {
          return (
            <React.Fragment key={categoryId}>
              <Grid item>
                <Typography className="highlight" variant="h6">
                  {category.name}
                </Typography>
              </Grid>
              <Grid item>
                <ul>
                  {category.items.map((item, itemId) => {
                    return (
                      <React.Fragment key={`${categoryId}_${itemId}`}>
                        <li>
                          <Typography>{item}</Typography>
                        </li>
                      </React.Fragment>
                    )
                  })}
                </ul>
              </Grid>
            </React.Fragment>
          )
        })}
      </Grid>
    </Grid>
  )
}
