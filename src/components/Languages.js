import React from 'react';
import { Grid, Table, TableHeaderRow } from '@devexpress/dx-react-grid-material-ui';
import {
    SortingState,
    IntegratedSorting,
} from '@devexpress/dx-react-grid';
import Paper from '@material-ui/core/Paper';

const prepareLanguages = repositories => repositories
      .map(repo => repo.language)
      .reduce((acc, el) => ({
          ...acc,
          [el]: acc[el] ? acc[el] + 1 : 1
      }), {});

export default (props) => {
  const languages = prepareLanguages(props.repositories);
  const data = Object.entries(languages).map(([key, value]) => ({
    language: key,
    languageCount: value
  }));
  return (<Paper>
    <Grid
      columns={[{
        name: 'language',
        title: 'Language'
      },{
        name: 'languageCount',
        title: 'Count'
      }]}
      rows={data}>
      <SortingState
        defaultSorting={[{ columnName: 'languageCount', direction: 'desc' }]}
      />
      <IntegratedSorting />
      <Table />
      <TableHeaderRow showSortingControls />
    </Grid>
  </Paper>);
}
