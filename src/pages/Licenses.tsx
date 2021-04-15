import React from "react";
import {
  Grid,
  Table,
  TableHeaderRow,
} from "@devexpress/dx-react-grid-material-ui";
import { SortingState, IntegratedSorting } from "@devexpress/dx-react-grid";
import Paper from "@material-ui/core/Paper";
import { useSelector } from "react-redux";
import { RootState } from "..";

type Repository = {
  licenseNickname: string;
};

const prepareTags = (repositories: Repository[]) => {
  const emptyAccumulator: { [key: string]: number } = {};
  return repositories
    .map((repo) => repo.licenseNickname)
    .reduce(
      (acc, el) => ({
        ...acc,
        [el]: acc[el] ? acc[el] + 1 : 1,
      }),
      emptyAccumulator
    );
};

type LicensesProps = {
  repositories?: Repository[];
};

export default () => {
  const repositories = useSelector(
    (state: RootState) => state.reducer.repositories
  );
  const tags = prepareTags(repositories);
  const data = Object.entries(tags).map(([key, value]) => ({
    license: key,
    licenseCount: value,
  }));
  return (
    <Paper>
      <Grid
        columns={[
          {
            name: "license",
            title: "License",
          },
          {
            name: "licenseCount",
            title: "License Count",
          },
        ]}
        rows={data}
      >
        <SortingState
          defaultSorting={[{ columnName: "licenseCount", direction: "desc" }]}
        />
        <IntegratedSorting />
        <Table />
        <TableHeaderRow showSortingControls />
      </Grid>
    </Paper>
  );
};
