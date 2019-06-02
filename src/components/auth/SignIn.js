import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { positions } from '@material-ui/system';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import axios from 'axios';

const styles = {
    textField: {
        width: 340,
        spacing: 1220
      },
    btn: {
        position: 'relative',
    },
    ppr: {width: 200}
};



class SignIn extends Component {
    state = {
        open: false,
        username: '',
        password: ''
 
    }

    handleChange = name => event => {
        this.setState({ ...this.state, [name]: event.target.value });
        console.log(name, event.target.value);
      };
    
    handleSubmit = () => {
        console.log(this.state);
        axios.post('http://127.0.0.1:5000', this.state)
            .then(res => console.log(res));
    }
    
  render() {
    return (
        
    <div className="container">
        <form>
            <TextField
                id="standard-name"
                label="Username"
                style={styles.textField}
                value={this.state.name}
                onChange={this.handleChange('username')}
                margin="normal"
            /><br/>
            <TextField
                id="standard-name"
                label="Password"
                style={styles.textField}
                value={this.state.password}
                onChange={this.handleChange('password')}
                margin="normal"
            /><br/> 
            <Button onClick={this.handleSubmit} style={styles.btn} variant="contained" color="secondary">Submit</Button>
        </form> 
      </div>
      
    )
  }
}

export default SignIn;


