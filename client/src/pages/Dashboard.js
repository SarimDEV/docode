import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Slide from '@material-ui/core/Slide';

import SignUpForm from '../components/LandingPage/SignUpForm';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
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
    }
}));

export default function LandingPage() {
    const classes = useStyles();
    const [checked] = React.useState(true);

    return (
        <div className={classes.heroContent}>
        <div className={classes.wrapper}>
          <Slide direction="up" in={checked} mountOnEnter unmountOnExit>
            <Grid container>
              <Grid item xs={12} sm={6}>
                <Container maxWidth="sm" className={classes.heroBlur}>
                  <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                    <strong>HII</strong>
                  </Typography>
                </Container>
              </Grid>
              <Grid item xs={12} sm={6}>
                <SignUpForm />
              </Grid>
            </Grid>
          </Slide>

        </div>
      </div>
    )
}