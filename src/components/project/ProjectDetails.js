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

const styles = {
    card: { maxWidth: 600 },
    img: {height: 100},
    cont: {display: 'flex',justifyContent: 'center'}
}

class ProjectDetails extends Component {
    constructor(props) {
        super(props);
        this.state = { id: props.match.params.id };
    }
  render() {
    return (
      <div className="containter" style={styles.cont}>
        <Card style={styles.card}>
            <CardActionArea>
                <CardMedia  style={styles.img}
                image="C:\Users\Acer\Desktop\Projects\react-projects\project1\app1\app-one\src\assets\images\food.jpg"
                title="Contemplative Reptile"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    thist is details fuck - {this.state.id}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                This defines the alignment along the main axis. It helps distribute extra free space 
                left over when either all the flex items on a line are inflexible, or are
                 flexible but have reached their maximum size. It also exerts some control 
                 over the alignment of items when they overflow the line.
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                Share
                </Button>
                <Button size="small" color="primary">
                Learn More
                </Button>
            </CardActions>
        </Card>     
      </div>
    )
  }
}

export default ProjectDetails;