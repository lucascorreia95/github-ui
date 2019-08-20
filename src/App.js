import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import AppBar from './components/AppBar';
import Content from './components/Content'

function App() {
  return (
    <>
      <CssBaseline />
      <AppBar />
      <Content />
    </>
  );
}

export default App;
