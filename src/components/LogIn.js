import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';

class LogIn extends Component {
  render() {
    return (
      <React.Fragment>
        <Typography variant="display1">
          Log in!
        </Typography>
        <Typography paragraph={true}>
          Please log in with GitHub to start organizing your repositories.
        </Typography>
      </React.Fragment>
    );
  }
}

export default LogIn;
