import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';






class TextButtons extends React.Component {

  constructor(props) {
    
    super(props);
    this.state = {color: '#f3e5f5'};
  }

  render() {
    return (
      <Button>{this.props.name}</Button>
    );
  }
}


export default TextButtons;


