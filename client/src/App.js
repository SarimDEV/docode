import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';

import NavBar from './components/NavBar';

import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import SignInPage from './pages/SignInPage';


import { BrowserRouter as Router, Route, Link as RouterLink } from "react-router-dom";

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

function Index() {
  return <LandingPage />;
}
function DashboardPage() {
  return <Dashboard />
}
function SignIn() {
  return <SignInPage />
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  site: {
    display: 'flex',
    minHeight: '85vh',
    flexDirection: 'column'
  },
  content: {
    flex: 1
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function App() {
  const classes = useStyles();

  return (
    <Router>
      <React.Fragment>
        <CssBaseline />
        <NavBar />
        <body className={classes.site}>
          <main className={classes.content}>
            <RouterLink to="/">Home </RouterLink>
            <RouterLink to="/dashboard">Dashboard</RouterLink>
            <Route path="/" exact component={Index} />
            <Route path="/dashboard" component={DashboardPage} />
            <Route path="/signin" component={SignIn} />
          </main>
          {/* Footer */}
          <footer className={classes.footer}>
            <Copyright />
          </footer>
        </body>
        {/* End footer */}
      </React.Fragment>
    </Router>
  );
}
