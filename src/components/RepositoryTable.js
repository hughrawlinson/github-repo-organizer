import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';
// import { connect } from 'react-redux';
import { Grid, Table, TableHeaderRow, TableFilterRow, Toolbar, SearchPanel, ColumnChooser, TableColumnVisibility } from '@devexpress/dx-react-grid-material-ui';
import { FilteringState, IntegratedFiltering, SearchState, SortingState, IntegratedSorting } from '@devexpress/dx-react-grid';
import { DataTypeProvider } from '@devexpress/dx-react-grid';

const styles = theme => ({});

const DateTypeProvider = props => (
  <DataTypeProvider
    formatterComponent={({value}) => value.toLocaleDateString()}
    {...props}
  />
);

const LinkTypeProvider = props => (
  <DataTypeProvider
    formatterComponent={({value:{href, title}}) => (<a href={href}>{title}</a>)}
    {...props}
  />
);

const ChipListProvider = props => (
  <DataTypeProvider
    formatterComponent={({value}) => (value ? <>
      {value.map((v) => (<Chip style={{margin: "3px"}} key={v} label={v}/>))}
    </> : null)}
    {...props}
  />
);

const BooleanTypeProvider = props => (
  <DataTypeProvider
    formatterComponent={({value}) => (<Chip label={value ? "True" : "False"} />)}
    {...props}
  />
);

const tableColumnExtensions = [
  { columnName: 'topics', wordWrapEnabled: true },
  { columnName: 'description', wordWrapEnabled: true },
];

const defaultHiddenColumnNames = ['isPrivate', 'isArchived', 'isFork', 'owner', 'licenseNickname'];

class App extends Component {
  render() {
    // const { classes } = this.props;
    return (
      <Paper>
        <Grid
          columns={[{
              name: 'name',
              title: 'Name',
              getCellValue: row => ({
                href: row.url,
                title: row.name
              })
          },{
              name: 'description',
              title: 'Description'
          },{
              name: 'createdAt',
              title: 'Created At',
              getCellValue: row => new Date(row.createdAt)
          },{
              name: 'topics',
              title: 'Topics',
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
          },{
              name: 'isArchived',
              title: 'Archived',
          },{
              name: 'isFork',
              title: 'Fork',
          },{
              name: 'licenseNickname',
              title: 'License'
          }]}
          rows={this.props.repositories}>
          <DateTypeProvider
            for={['createdAt']}
          />
          <LinkTypeProvider
            for={['name']}
          />
          <ChipListProvider
            for={['topics']}
          />
          <BooleanTypeProvider
            for={['isPrivate', 'isArchived', 'isFork']}
          />
          <FilteringState
            defaultFilters={[]}
          />
          <SortingState
            defaultSorting={[]}
          />
          <SearchState />
          <IntegratedFiltering/>
          <IntegratedSorting/>
          <Table columnExtensions={tableColumnExtensions}/>
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
