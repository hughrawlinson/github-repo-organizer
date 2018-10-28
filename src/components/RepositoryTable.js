import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
// import { connect } from 'react-redux';
import { Grid, Table, TableHeaderRow, TableFilterRow, Toolbar, SearchPanel, ColumnChooser, TableColumnVisibility } from '@devexpress/dx-react-grid-material-ui';
import { FilteringState, IntegratedFiltering, SearchState, SortingState, IntegratedSorting } from '@devexpress/dx-react-grid';

const styles = theme => ({});

const defaultHiddenColumnNames = ['isPrivate', 'isArchived', 'isFork'];

class App extends Component {
  render() {
    // const { classes } = this.props;
    return (
      <Paper>
        <Grid
          columns={[{
              name: 'name',
              title: 'Name',
              getCellValue: row => (<a href={row.url}>{row.name}</a>)
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
              name: 'owner',
              title: 'Owner'
          },{
              name: 'isPrivate',
              title: 'Private',
              getCellValue: row => row.isPrivate ? "True" : "False"
          },{
              name: 'isArchived',
              title: 'Archived',
              getCellValue: row => row.isArchived ? "True" : "False"
          },{
              name: 'isFork',
              title: 'Fork',
              getCellValue: row => row.isFork ? "True" : "False"
          },{
              name: 'licenseNickname',
              title: 'License'
          }]}
          rows={this.props.repositories}>
          <FilteringState
            defaultFilters={[]}
          />
          <SortingState
            defaultSorting={[]}
          />
          <SearchState />
          <IntegratedFiltering/>
          <IntegratedSorting/>
          <Table/>
          <TableHeaderRow showSortingControls />
          <TableFilterRow showFilterSelector />
          <TableColumnVisibility defaultHiddenColumnNames={defaultHiddenColumnNames} />
          <Toolbar/>
          <SearchPanel />
          <ColumnChooser />
        </Grid>
      </Paper>
    );
  }
}

export default withStyles(styles)(App);
