import React from 'react';
import { ThemeProvider } from '@material-ui/styles';

import theme from './components/Theme';
import Login from './components/Login';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Login />
    </ThemeProvider>
  );
}

export default App;
