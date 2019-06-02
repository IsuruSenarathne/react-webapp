import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom'
import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import ProjectSummary from './ProjectSummary';
const styles = {
    cont: {display: 'flex'}
}

class ProjectList extends Component {
  render() {
    return (
      <div className="containter" style={styles.cont}>
        <ProjectSummary />
        <ProjectSummary />
        <ProjectSummary />

      </div>
    )
  }
}

export default ProjectList;