import { createMuiTheme } from '@material-ui/core/styles';

const blue = '#0B72B9';
const orange = '#FFBA60';
const green = '#00C853';

export default createMuiTheme({
  palette: {
    common: {
      blue: `${blue}`,
      orange: `${orange}`,
      green: `${green}`,
    },
    primary: {
      main: `${blue}`,
    },
    secondary: {
      main: `${green}`,
    },
    error: {
      main: `${orange}`,
    }
  },
});
