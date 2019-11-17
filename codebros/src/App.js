import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button'

import { MuiThemeProvider, createMuiTheme } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  customButton: {
    margin: theme.spacing(1),
    color:'red',
    backgroundColor:'white',
  },
  input: {
    display: 'none',
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <header className="App-header">
      <Button className={classes.customButton}>hello</Button>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    
  );
}

export default App;
