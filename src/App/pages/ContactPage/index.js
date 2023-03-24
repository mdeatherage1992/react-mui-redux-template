import React from 'react';
import { Typography, Grid, Button, TextField } from '@mui/material';
import { useContactPageSlice } from './slice';
import { useDispatch, useSelector } from 'react-redux';
import { selectEmail, selectMessage } from './slice/selectors';
import { toast } from 'react-toastify';

export function ContactPage(props) {
  const dispatch = useDispatch();
  const email = useSelector(selectEmail);
  const message = useSelector(selectMessage);

  const { actions } = useContactPageSlice();

  const handleMessage = e => {
    dispatch(actions.setMessage(e.target.value));
  };
  const handleEmail = e => dispatch(actions.setEmail(e.target.value));
  const handleSubmit = e => {
    e.preventDefault();
    toast('Successfully Submitted Form. Check Console');
    dispatch(actions.submitForm());
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Grid container p={10}>
          <Grid item xs={12}>
            <Typography>Contact Page</Typography>
          </Grid>
          <Grid item xs={8}>
            <TextField
              label="Email"
              value={email}
              onChange={handleEmail}
              variant="filled"
              sx={{ width: '80%' }}
            />
          </Grid>
          <Grid item xs={8}>
            <TextField
              label="Message"
              variant="filled"
              multiline
              onChange={handleMessage}
              value={message}
              minRows={8}
              sx={{ width: '80%' }}
            />
          </Grid>
          <Grid item xs={8}>
            <Button type="submit" variant="contained">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
}
