import React from 'react';
import RepositoryTable from './RepositoryTable';

export default (props) => {
  return (<RepositoryTable
    queryParams={props.queryParams}
    repositories={props.repositories}/>);
}
