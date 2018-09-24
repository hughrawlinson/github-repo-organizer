import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { connect } from 'react-redux';

const styles = theme => ({});

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Paper>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Created At</TableCell>
              <TableCell>Topics</TableCell>
              <TableCell>Stars</TableCell>
              <TableCell>Language</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.repositories.map(row => {
              return (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell>{row.description}</TableCell>
                  <TableCell>{(new Date(row.createdAt)).toLocaleDateString()}</TableCell>
                  <TableCell>{(row.topics || []).join(', ')}</TableCell>
                  <TableCell>{row.stars}</TableCell>
                  <TableCell>{row.language}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default withStyles(styles)(App);
