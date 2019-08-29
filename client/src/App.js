import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Slide from '@material-ui/core/Slide'

import SignUpForm from './components/LandingPage/SignUpForm'
import logo from './imgs/logo.png'


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/sarimDEV">
        Sarim
      </Link>{' '}
      {new Date().getFullYear()}
      {'. Built with '}
      <Link color="inherit" href="https://material-ui.com/">
        Material-UI.
      </Link>
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  logo: {
    marginRight: '10px',
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.secondary,
    padding: theme.spacing(8, 0, 6),
  },
  heroBlur: {
    paddingTop: theme.spacing(8)
  },
  heroButtons: {
    flexGrow: 1,
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(5),
  },
}));

export default function App() {
  const classes = useStyles();
  const [checked] = React.useState(true);

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <img className={classes.logo} src={logo} alt="icon" />
          <Typography variant="h6" className={classes.title}>
            DoCode
          </Typography>
          <Button color="inherit">Sign In</Button>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}

        <div className={classes.heroContent}>
          <div className={classes.wrapper}>
            <Slide direction="up" in={checked} mountOnEnter unmountOnExit>
              <Grid container>
                <Grid item xs={12} sm={6}>
                  <Container maxWidth="sm" className={classes.heroBlur}>
                    <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                      <strong>Learn By Doing</strong>
                    </Typography>
                    <Typography variant="h5" align="center" color="textSecondary" paragraph>
                      Don't get stuck watching tutorials, sign up, write code and get it reviewed by experienced programmers now.
            </Typography>
                    <div className={classes.heroButtons}>
                      <Grid container spacing={2} justify="center">
                        <Grid item>
                          <Button variant="contained" color="primary">
                            Learn More
                  </Button>
                        </Grid>
                        <Grid item>
                          <Button variant="outlined" color="primary">
                            Apply as Experienced
                  </Button>
                        </Grid>
                      </Grid>
                    </div>
                  </Container>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <SignUpForm />
                </Grid>
              </Grid>
            </Slide>
          </div>
        </div>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}
