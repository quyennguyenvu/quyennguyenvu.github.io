import avatar from '@/static/images/avatar.jpg'
import { Container, Divider, Grid, List, ListItem, ListItemText, Typography } from '@material-ui/core'
import React from 'react'
import './style.scss'

export default function Home() {
  return (
    <Container maxWidth="md" className="resume-wrapper">
      <Grid container className="resume-body" spacing={5} direction="column">
        <Grid item container spacing={3} className="bio">
          <Grid item xs={3} className="avatar">
            <img src={avatar} alt="avatar" width="100%" />
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
        <Grid item container spacing={3}>
          <Grid item xs={3}>
            <Typography variant="h5" align="right">
              Experience
            </Typography>
          </Grid>
          <Grid item container xs={9} direction="column" spacing={2}>
            <Grid item container direction="column" spacing={1}>
              <Grid item container alignItems="center">
                <Grid item xs={6}>
                  <Typography className="highlight" variant="h6">
                    Teko
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography className="period" align="right">
                    (11/2018 - 11/2020)
                  </Typography>
                </Grid>
              </Grid>
              <Grid item>
                <Typography className="project">Finance Management System (FMS)</Typography>
                <Typography className="description">
                  FMS plays the role of recording vouchers and events of other systems that increase or decrease the
                  liabilities of the subjects managed by FMS. Each voucher or events will generate debt accounting, and
                  from debt accounting will generate summary reports to track the debt status of specific debtors or
                  orders.
                </Typography>
                <ul className="contributes">
                  <li>
                    <Typography>Contributed in building system architect, following business logic.</Typography>
                  </li>
                  <li>
                    <Typography>Monitored to track and fix any error occurs.</Typography>
                  </li>
                  <li>
                    <Typography>Contributed solutions for download millions of records.</Typography>
                  </li>
                </ul>
                <Typography color="primary" className="techstack">
                  Microservices, Python, Rabbitmq, Docker, k8s, Grafana, linux server
                </Typography>
              </Grid>
            </Grid>

            <Divider />
            <Grid item container direction="column" spacing={1}>
              <Grid item container alignItems="center">
                <Grid item xs={6}>
                  <Typography className="highlight" variant="h6">
                    Grab
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography className="period" align="right">
                    (06/2018 – 10/2018)
                  </Typography>
                </Grid>
              </Grid>
              <Grid item>
                <Typography className="project">Partner gateway</Typography>
                <Typography className="description">
                  Building a platform for 3rd-party developers to create their own applications and services that access
                  data in grab.
                </Typography>
                <ul className="contributes">
                  <li>
                    <Typography>
                      Evaluated pros and cons between API gateways such as Tyk, Kong... to find out which tool is most
                      suitable for our needs.
                    </Typography>
                  </li>
                  <li>
                    <Typography>Used Docker to setup and demonstrate how each API gateway works.</Typography>
                  </li>
                </ul>
                <Typography color="primary" className="techstack">
                  Microservices, Go, Docker, Kibaba, Grafana, Datadog
                </Typography>
              </Grid>
            </Grid>

            <Divider />
            <Grid item container direction="column" spacing={1}>
              <Grid item container alignItems="center">
                <Grid item xs={6}>
                  <Typography className="highlight" variant="h6">
                    Admicro – VCCorp
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography className="period" align="right">
                    (09/2015 – 06/2018)
                  </Typography>
                </Grid>
              </Grid>
              <Grid item>
                <Typography className="project">Adx, Admarket, PRContent</Typography>
                <Typography className="description">
                  Web app for campaign, banner management, export reports.
                </Typography>
                <ul className="contributes">
                  <li>
                    <Typography>Optimized website performance by refactored code.</Typography>
                  </li>
                  <li>
                    <Typography>
                      Wrote store procedures in order to interact with database due to restricted security.
                    </Typography>
                  </li>
                </ul>
                <Typography color="primary" className="techstack">
                  PHP (CodeIgniter), MySQL, Bootstrap, jQuery
                </Typography>
              </Grid>
            </Grid>

            <Divider />
            <Grid item container direction="column" spacing={1}>
              <Grid item container alignItems="center">
                <Grid item xs={6}>
                  <Typography className="highlight" variant="h6">
                    VietIS Corporation
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography className="period" align="right">
                    (10/2014 – 09/2015)
                  </Typography>
                </Grid>
              </Grid>
              <Grid item>
                <Typography className="project">OffShore: worked with Viettel</Typography>
                <Typography className="description">Web app for expanded program on immunization.</Typography>
                <ul className="contributes">
                  <li>
                    <Typography>Worked with MVC model.</Typography>
                  </li>
                  <li>
                    <Typography>Writing query using lambda expression.</Typography>
                  </li>
                </ul>
                <Typography color="primary" className="techstack">
                  .NET (Entity Framework), Oracle, Jquery
                </Typography>
              </Grid>

              <Divider variant="middle" />
              <Grid item>
                <Typography className="project">UrJapan</Typography>
                <Typography className="description">
                  A website which helps Thai tourists come to visit Japan.
                </Typography>
                <ul className="contributes">
                  <li>
                    <Typography>Developed responsive website, optimized UI/UX.</Typography>
                  </li>
                  <li>
                    <Typography>Implemented google and facebook APIs.</Typography>
                  </li>
                </ul>
                <Typography color="primary" className="techstack">
                  PHP (CakePHP), MySQL, Bootstrap, Jquery
                </Typography>
              </Grid>
            </Grid>

            <Divider />
            <Grid item container direction="column" spacing={1}>
              <Grid item container alignItems="center">
                <Grid item xs={6}>
                  <Typography className="highlight" variant="h6">
                    SmartOSC
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography className="period" align="right">
                    (10/2014 – 09/2015)
                  </Typography>
                </Grid>
              </Grid>
              <Grid item>
                <Typography className="project">Vaxiorder</Typography>
                <Typography className="description">
                  A website which allows admin to manage the products, orders and bills. Logged in users can track their
                  orders including products, prices and status. My duties is contributed in build a module for manage
                  suppliers, products, login system.
                </Typography>
                <Typography color="primary" className="techstack">
                  PHP 5.3, MySQL, Jquery, Bootstrap
                </Typography>
              </Grid>

              <Divider variant="middle" />
              <Grid item>
                <Typography className="project">Cava-bien</Typography>
                <Typography className="description">
                  An e-commerce website for selling women’s clothes, shoes and accessories based on Magento.
                </Typography>
                <Typography color="primary" className="techstack">
                  PHP (Magento Enterprise 1.13), MySQL
                </Typography>
              </Grid>
            </Grid>

            <Divider />
            <Grid item container direction="column" spacing={1}>
              <Grid item container alignItems="center">
                <Grid item xs={6}>
                  <Typography className="highlight" variant="h6">
                    Freelance
                  </Typography>
                </Grid>
              </Grid>
              <Grid item>
                <Typography className="project">Football Management System (FMS)</Typography>
                <Typography className="description">Built booking field management eco-system for VECGROUP.</Typography>
                <ul className="contributes">
                  <li>
                    <Typography>Analyzed customer needs to write WBS.</Typography>
                  </li>
                  <li>
                    <Typography>
                      Designed database structure, project architecture follow repositories-service pattern, and
                      implemented business logics with my partner.
                    </Typography>
                  </li>
                </ul>
                <Typography color="primary" className="techstack">
                  PHP 7.2 (Laravel 5.8), MySQL, JWT
                </Typography>
              </Grid>

              <Divider variant="middle" />
              <Grid item>
                <Typography className="project">PysTravel</Typography>
                <Typography className="description">Built booking system for travel agency.</Typography>
                <ul className="contributes">
                  <li>
                    <Typography>Analyzed customer needs to write WBS.</Typography>
                  </li>
                  <li>
                    <Typography>
                      Designed database structure, file structure follow repository pattern, and implemented business
                      logics with my partner.
                    </Typography>
                  </li>
                </ul>
                <Typography color="primary" className="techstack">
                  PHP 5.6 (Laravel 4.2), Angular 1, MySQL
                </Typography>
              </Grid>
            </Grid>

            {/* end of grid exp */}
          </Grid>
        </Grid>

        <Divider variant="fullWidth" />
        <Grid item container spacing={3}>
          <Grid item xs={3}>
            <Typography variant="h5" align="right">
              Technical Skills
            </Typography>
          </Grid>
          <Grid item container xs={9} direction="column">
            <Grid item>
              <Typography className="highlight" variant="h6">
                Languages
              </Typography>
            </Grid>
            <Grid item>
              <ul>
                <li>
                  <Typography>Frontend: HTML, CSS, Javascript, JQuery</Typography>
                </li>
                <li>
                  <Typography>Backend: PHP, Python, Go</Typography>
                </li>
              </ul>
            </Grid>

            <Grid item>
              <Typography className="highlight" variant="h6">
                Databases
              </Typography>
            </Grid>
            <Grid item>
              <ul>
                <li>
                  <Typography>MySQL, MSSQL, Oracle, Redis</Typography>
                </li>
              </ul>
            </Grid>

            <Grid item>
              <Typography className="highlight" variant="h6">
                Architectures
              </Typography>
            </Grid>
            <Grid item>
              <ul>
                <li>
                  <Typography>Microservices, Docker, OOP, RESTful services, gRPC, graphQL, git, SVN</Typography>
                </li>
                <li>
                  <Typography>Design pattern: repositories-services, CQRS</Typography>
                </li>
              </ul>
            </Grid>
          </Grid>
        </Grid>

        <Divider variant="fullWidth" />
        <Grid item container spacing={3}>
          <Grid item xs={3}>
            <Typography variant="h5" align="right">
              Education
            </Typography>
          </Grid>
          <Grid item container xs={9} direction="column">
            <Grid item>
              <Typography className="highlight" variant="h6">
                Hanoi University of Science and Technology
              </Typography>
            </Grid>
            <Grid item>
              <List>
                <ListItem>
                  <ListItemText primary="The degree of master of engineer – Software engineering (2016 – 2018)" />
                </ListItem>
              </List>
            </Grid>

            <Grid item>
              <Typography className="highlight" variant="h6">
                National University of Civil Engineer
              </Typography>
            </Grid>
            <Grid item>
              <List>
                <ListItem>
                  <ListItemText primary="The degree of engineer – Information Technology (2009 – 2014)" />
                </ListItem>
              </List>
            </Grid>

            <Grid item>
              <Typography className="highlight" variant="h6">
                Languages
              </Typography>
            </Grid>
            <Grid item>
              <ul>
                <li>
                  <Typography>Vietnamese - Native speaker</Typography>
                </li>
                <li>
                  <Typography>English - Upper intermediate (B1, TOEIC 720)</Typography>
                </li>
              </ul>
            </Grid>
          </Grid>
        </Grid>

        {/* end resume body */}
      </Grid>
    </Container>
  )
}
