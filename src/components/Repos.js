import React from 'react';
import RepositoryTable from './RepositoryTable';

export default function Repos(props) {
  return (<>
    <RepositoryTable
      repositories={props.repositories}/>
  </>);
}
