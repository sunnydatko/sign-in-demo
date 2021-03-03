import React from 'react';
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Link,
  TextField,
} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

import logo from '../assets/logo-12.svg';

const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: '30em',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function App() {
  const classes = useStyles();

  return (
    <>
      <Box textAlign='center'>
        <img
          src={logo}
          alt='Company logo'
          style={{ width: 400, margin: '0 0 -20px 0' }}
        />
      </Box>
      <Grid container direction='column' alignItems='center'>
        <Grid
          item
          container
          direction='column'
          alignItems='center'
          className={classes.container}
        >
          <form className={classes.form} noValidate>
            <TextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              id='email'
              label='Email Address'
              autoFocus
            />
            <TextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              label='Password'
              type='password'
              id='password'
            />
            <FormControlLabel
              control={<Checkbox value='remember' color='primary' />}
              label='Remember me'
            />
            <Button
              type='submit'
              fullWidth
              variant='contained'
              color='primary'
              className={classes.submit}
            >
              Sign In
            </Button>
            <Box align='center'>
              <Link href='#' variant='body2'>
                Forgot password?
              </Link>
            </Box>
          </form>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
