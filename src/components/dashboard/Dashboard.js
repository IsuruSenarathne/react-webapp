import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom'
import React, { Component } from 'react'
import AccountCircle from '@material-ui/icons/AccountCircle';
import ProjectList from '../project/ProjectList'

class Dashboard extends Component {
  render() {
    return (
      <div className="container">
        <ProjectList/>
      </div>
      
    )
  }
}

export default Dashboard;