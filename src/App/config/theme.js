import { createTheme } from '@mui/material/styles';

const brightGray = '#242d39';
const trueGray = '#b0c9eb';
const slateGray = '#777e90';
const shuttleGray = '#596677';
const ebony = '#0d0a19';
const green = '#1ba94c';
const offWhite = '#F4F5F9';
const white = '#ffffff';
const red = '#d11534';
const aliceBlue = '#f6f7f8';
const grayBackgroundColor = '#F8F8F8';
const lightBlue = '#257bbf';
const orange = '#F58B6F';
const goshtWhite = '#FCFCFD';
const darkBlue = '#008EFF';
const yellow = '#FFD166';
const purple = '#1982FC';
const textGray = '#10152A';

export default createTheme({
  palette: {
    common: {
      main: purple,
      darkGray: brightGray,
      lightGray: slateGray,
      shuttleGray: shuttleGray,
      orange: orange,
      offWhite: offWhite,
      trueGray: trueGray,
      green: green,
      white: white,
      red: red,
      textGray: textGray,
      purple: purple,
      aliceBlue: aliceBlue,
      grayBackgroundColor: grayBackgroundColor,
      lightBlue: lightBlue,
      ebony: ebony,
      goshtWhite: goshtWhite,
      darkBlue: darkBlue,
      yellow: yellow,
    },
    primary: {
      main: purple,
    },
    secondary: {
      main: slateGray,
      light: trueGray,
    },
  },
  typography: {
    h2: {
      fontFamily: 'Roboto',
      fontWeight: 700,
      fontSize: '2rem',
      color: ebony,
      lineHeight: 1.5,
    },
    h3: {
      fontFamily: 'Roboto',
      fontSize: '1.875rem',
      fontWeight: 700,
      color: ebony,
    },
    h4: {
      fontFamily: 'Roboto',
      fontSize: '1.55rem',
      color: ebony,
      fontWeight: 700,
    },
    h5: {
      fontFamily: 'Roboto',
      fontSize: '1rem',
      color: ebony,
      fontWeight: 600,
    },
    h6: {
      fontWeight: 500,
      fontSize: '0.875rem',
      fontFamily: 'Roboto',
      color: ebony,
    },
    subtitle1: {
      fontSize: '0.75rem',
      fontWeight: 400,
      color: slateGray,
      fontFamily: 'Roboto',
    },
    subtitle2: {
      fontSize: '0.75rem',
      fontWeight: 400,
      color: aliceBlue,
      fontFamily: 'Roboto',
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
      fontFamily: 'Roboto',
    },
    body2: {
      fontSize: '0.875rem',
      fontWeight: 400,
      fontFamily: 'Roboto',
    },
    tab: {
      fontFamily: 'Roboto',
      textTransform: 'none',
      fontSize: '1rem',
      color: 'white',
    },
  },
});
