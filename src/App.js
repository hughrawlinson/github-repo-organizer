import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import CssBaseline from '@material-ui/core/CssBaseline';
import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import qs from 'query-string';

import LogIn from './components/LogIn.js';
import RepositoryTable from './components/RepositoryTable.js'
import Topics from './components/Topics.js'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    height: '100vh',
    overflow: 'auto',
  },
});

class App extends Component {
  constructor(props) {
    super(props);

    this.ifLoggedOut = this.ifLoggedOut.bind(this);
    this.ifLoggedIn = this.ifLoggedIn.bind(this);
    this.ifRepositories = this.ifRepositories.bind(this);
  }

  ifRepositories(child) {
    if (this.props.repositories) {
      return child;
    }
    return null
  }

  ifLoggedOut(child) {
    if(!this.props.loggedIn) {
      return child;
    }
    return null;
  }

  ifLoggedIn(child) {
    if(this.props.loggedIn) {
      return child;
    }
    return null;
  }

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <CssBaseline/>
        <div className="App">
          <AppBar>
            <Toolbar>
              {this.ifLoggedIn(
                 <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                  <MenuIcon />
                 </IconButton>
              )}
              <Typography variant="title" color="inherit" className={classes.grow}>
                GitHub Repo Organizer
              </Typography>
              {this.ifLoggedOut(
                 <Button onClick={this.props.startLogIn} color="inherit">Login</Button>
              )}
            </Toolbar>
          </AppBar>
          <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            {this.ifLoggedOut(<LogIn/>)}
            {this.ifRepositories(
            <Router>
              <Switch>
                <Route
                    exact
                    path="/"
                component={(props) => {
                    const queryParams = qs.parse(props.location.search);
                    return (<RepositoryTable
                      queryParams={queryParams}
                      repositories={this.props.repositories}/>)
                }}
                />
                <Route exact path="/topics" component={() => (
                    <Topics repositories={this.props.repositories}/>
                )}/>
              </Switch>
            </Router>
            )}
          </main>
        </div>
      </React.Fragment>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  loggedIn: state.loggedIn,
  repositories: state.repositories
});

const mapDispatchToProps = (dispatch) => ({
  startLogIn: () => dispatch({type: 'START_LOG_IN'}),
  loadRepositories: () => dispatch({type: 'START_LOAD_REPOSITORIES'}),
  loadUser: () => dispatch({type: 'START_LOAD_USER'})
});

export default
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(withStyles(styles)(App));
