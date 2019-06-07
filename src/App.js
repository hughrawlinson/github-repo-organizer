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
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import qs from 'query-string';

import LogIn from './components/LogIn.js';
import Repos from './components/Repos.js';
import Topics from './components/Topics.js'
import Licenses from './components/Licenses.js'
import Languages from './components/Languages.js'

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
    padding: theme.spacing(3),
    height: '100vh',
    overflow: 'auto',
  },
});

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      drawerOpen: false
    };

    this.ifLoggedOut = this.ifLoggedOut.bind(this);
    this.ifLoggedIn = this.ifLoggedIn.bind(this);
    this.ifRepositories = this.ifRepositories.bind(this);
  }

  toggleDrawer(value) {
    this.setState(state => ({
      ...state,
      drawerOpen: value ? value : !state.drawerOpen
    }));
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
        <Router>
        <div className="App">
          <AppBar>
            <Toolbar>
              {this.ifLoggedIn(
                 <IconButton
                  className={classes.menuButton}
                  color="inherit"
                  aria-label="Menu"
                  onClick={() => this.toggleDrawer()}
                      >
                  <MenuIcon />
                 </IconButton>
              )}
              <Typography variant="h6" color="inherit" className={classes.grow}>
                GitHub Repo Organizer
              </Typography>
              {this.ifLoggedOut(
                 <Button onClick={this.props.startLogIn} color="inherit">Login</Button>
              )}
            </Toolbar>
          </AppBar>
          <Drawer
            open={this.state.drawerOpen}
            onClose={() => this.toggleDrawer(false)}
          >
            <div
              onClick={() => this.toggleDrawer(false)}
              onKeyDown={() => this.toggleDrawer(false)}>
              <List>
                <ListItem button>
                  <Link to={process.env.PUBLIC_URL + "/"}>
                    <ListItemText primary="Repositories" />
                  </Link>
                </ListItem>
                <ListItem button>
                  <Link to={process.env.PUBLIC_URL + "/topics"}>
                    <ListItemText primary="Topics" />
                  </Link>
                </ListItem>
                <ListItem button>
                  <Link to={process.env.PUBLIC_URL + "/licenses"}>
                    <ListItemText primary="Licenses" />
                  </Link>
                </ListItem>
                <ListItem button>
                  <Link to={process.env.PUBLIC_URL + "/languages"}>
                    <ListItemText primary="Languages" />
                  </Link>
                </ListItem>
              </List>
            </div>
          </Drawer>
          <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            {this.ifLoggedOut(<LogIn/>)}
            {this.ifRepositories(
            <Switch>
              <Route
                  exact
                  path={process.env.PUBLIC_URL + "/"}
              component={(props) => {
                  const queryParams = qs.parse(props.location.search);
                return (<Repos
                  queryParams={queryParams}
                  repositories={this.props.repositories}
                />)
              }}
              />
              <Route exact path={process.env.PUBLIC_URL + "/topics"} component={() => (
                  <Topics repositories={this.props.repositories}/>
              )}/>
              <Route exact path={process.env.PUBLIC_URL + "/licenses"} component={() => (
                  <Licenses repositories={this.props.repositories}/>
              )}/>
              <Route exact path={process.env.PUBLIC_URL + "/languages"} component={() => (
                  <Languages repositories={this.props.repositories}/>
              )}/>
            </Switch>
            )}
            </main>
          </div>
        </Router>
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
