import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';

export const Footer = () => {
  return (
    <Box
      sx={{
        width: '100%',
        minHeight: '63px',
        backgroundColor: 'secondary.light',
        paddingTop: '1rem',
        paddingBottom: '1rem',
      }}
    >
      <Container maxWidth="lg">
        <Grid container direction="column" alignItems="center">
          <Grid item xs={12}>
            <Typography color="black" variant="h5">
              React MUI-Starter
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography color="textSecondary" variant="subtitle1">
              {`${new Date().getFullYear()} | React | Material UI | React Router | Eslint | Prettier | Redux`}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
