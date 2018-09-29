import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { connect } from 'react-redux';
import { Grid, Table, TableHeaderRow, Toolbar } from '@devexpress/dx-react-grid-material-ui';
import { FilteringState, IntegratedFiltering, SortingState, IntegratedSorting } from '@devexpress/dx-react-grid';

const styles = theme => ({});

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Paper>
        <Grid
          columns={[{
              name: 'name',
              title: 'Name'
          },{
              name: 'description',
              title: 'Description'
          },{
              name: 'createdAt',
              title: 'Created At'
          },{
              name: 'repositoryTopics',
              title: 'Topics',
              getCellValue: row => row.topics.join(', ')
          },{
              name: 'stars',
              title: 'Stars'
          },{
              name: 'language',
              title: 'Language'
          },{
              name: 'isPrivate',
              title: 'Private',
              getCellValue: row => row.isPrivate ? "True" : "False"
          },{
              name: 'isArchived',
              title: 'Archived',
              getCellValue: row => row.isArchived ? "True" : "False"
          }]}
          rows={this.props.repositories}>
          <FilteringState
            defaultFilters={[]}
          />
          <SortingState
            defaultSorting={[]}
          />
          <IntegratedFiltering/>
          <IntegratedSorting/>
          <Toolbar/>
          <Table/>
          <TableHeaderRow/>
        </Grid>
      </Paper>
    );
  }
}

export default withStyles(styles)(App);
