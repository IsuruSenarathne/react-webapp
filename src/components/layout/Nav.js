import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom'
import React, { Component } from 'react'
import SignedInLinks from './SignedInLinks'


export default class Nav extends Component {
  render() {
    return (
      <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" style={{flexGrow:1}}>
            RECOORA
          </Typography>
          <SignedInLinks />
        </Toolbar>        
      </AppBar>
    </div>
      
    )
  }
}

