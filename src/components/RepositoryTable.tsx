import React from "react";
import { connect, useSelector } from "react-redux";
import { createStyles, withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Chip from "@material-ui/core/Chip";
import {
  Grid,
  Table,
  TableHeaderRow,
  TableFilterRow,
  Toolbar,
  SearchPanel,
  ColumnChooser,
  TableColumnVisibility,
  PagingPanel,
} from "@devexpress/dx-react-grid-material-ui";
import {
  FilteringState,
  IntegratedFiltering,
  SearchState,
  SortingState,
  IntegratedSorting,
  PagingState,
  IntegratedPaging,
} from "@devexpress/dx-react-grid";
import { DataTypeProvider } from "@devexpress/dx-react-grid";
import { RootState, useAppDispatch } from "../index";
import { GridState, setGridState } from "../reducers";

const styles = createStyles({});

const DateTypeProvider = (
  props: React.ComponentProps<typeof DataTypeProvider>
) => (
  <DataTypeProvider
    formatterComponent={({ value }) => value.toLocaleDateString()}
    {...props}
  />
);

const LinkTypeProvider = (
  props: React.ComponentProps<typeof DataTypeProvider>
) => (
  <DataTypeProvider
    formatterComponent={({ value: { href, title } }) => (
      <a href={href}>{title}</a>
    )}
    {...props}
  />
);

const ChipListProvider = (
  props: React.ComponentProps<typeof DataTypeProvider>
) => (
  <DataTypeProvider
    formatterComponent={({ value }: { value: string[] }) =>
      value ? (
        <>
          {value.map((v) => (
            <Chip style={{ margin: "3px" }} key={v} label={v} />
          ))}
        </>
      ) : null
    }
    {...props}
  />
);

const BooleanTypeProvider = (
  props: React.ComponentProps<typeof DataTypeProvider>
) => (
  <DataTypeProvider
    formatterComponent={({ value }) => (
      <Chip label={value ? "True" : "False"} />
    )}
    {...props}
  />
);

const ArrayLengthProvider = (
  props: React.ComponentProps<typeof DataTypeProvider>
) => (
  <DataTypeProvider
    formatterComponent={({ value }) => value.length}
    {...props}
  />
);

const CheckBoxProvider = (
  props: React.ComponentProps<typeof DataTypeProvider>
) => (
  <DataTypeProvider
    formatterComponent={({ value }) => <input type="checkbox" value={value} />}
    {...props}
  />
);

const tableColumnExtensions = [
  { columnName: "topics", wordWrapEnabled: true },
  { columnName: "description", wordWrapEnabled: true },
];

type Collaborator = {
  login: string;
};

function RepositoryTable() {
  const gridState = useSelector((state: RootState) => state.reducer.gridState);
  const repositories = useSelector(
    (state: RootState) => state.reducer.repositories
  );
  const dispatch = useAppDispatch();

  function setFilteringState(filteringState: any) {
    dispatch(setGridState({ ...gridState, filteringState }));
  }

  function setSortingState(sortingState: any) {
    dispatch(setGridState({ ...gridState, sortingState }));
  }

  function setSearchState(searchState: any) {
    dispatch(setGridState({ ...gridState, searchState }));
  }

  function setColumnVisibilityState(columnVisibilityState: any) {
    dispatch(setGridState({ ...gridState, columnVisibilityState }));
  }

  return (
    <Paper>
      <Grid
        columns={[
          {
            name: "selected",
            title: "Selected",
            getCellValue: (row) => false,
          },
          {
            name: "name",
            title: "Name",
            getCellValue: (row) => ({
              href: row.url,
              title: row.name,
            }),
          },
          {
            name: "description",
            title: "Description",
          },
          {
            name: "createdAt",
            title: "Created At",
            getCellValue: (row) => new Date(row.createdAt),
          },
          {
            name: "topics",
            title: "Topics",
          },
          {
            name: "stars",
            title: "Stars",
          },
          {
            name: "language",
            title: "Language",
          },
          {
            name: "owner",
            title: "Owner",
          },
          {
            name: "isPrivate",
            title: "Private",
          },
          {
            name: "isArchived",
            title: "Archived",
          },
          {
            name: "isFork",
            title: "Fork",
          },
          {
            name: "licenseNickname",
            title: "License",
          },
          {
            name: "vulnerabilityAlerts",
            title: "Vulnerability Alerts",
          },
          {
            name: "collaborators",
            title: "Collaborators",
            getCellValue: (row) =>
              row.collaborators &&
              row.collaborators.map(
                (collaborator: Collaborator) => collaborator.login
              ),
          },
          {
            name: "issueCount",
            title: "Open Issue Count",
          },
          {
            name: "pullRequestCount",
            title: "Open Pull Request Count",
          },
        ]}
        rows={repositories}
      >
        <DateTypeProvider for={["createdAt"]} />
        <LinkTypeProvider for={["name"]} />
        <ChipListProvider for={["topics", "collaborators"]} />
        <BooleanTypeProvider for={["isPrivate", "isArchived", "isFork"]} />
        <ArrayLengthProvider for={["vulnerabilityAlerts"]} />
        <CheckBoxProvider for={["selected"]} />
        <FilteringState
          defaultFilters={[]}
          filters={gridState.filteringState}
          onFiltersChange={setFilteringState}
        />
        <SortingState
          defaultSorting={[]}
          sorting={gridState.sortingState}
          onSortingChange={setSortingState}
        />
        <PagingState defaultCurrentPage={0} pageSize={40} />
        <SearchState
          value={gridState.searchState}
          onValueChange={setSearchState}
        />
        <IntegratedFiltering />
        <IntegratedSorting />
        <IntegratedPaging />
        <Table columnExtensions={tableColumnExtensions} />
        <TableHeaderRow showSortingControls />
        <TableFilterRow showFilterSelector />
        <TableColumnVisibility
          hiddenColumnNames={gridState.columnVisibilityState}
          onHiddenColumnNamesChange={setColumnVisibilityState}
        />
        <Toolbar />
        <SearchPanel />
        <ColumnChooser />
        <PagingPanel />
      </Grid>
    </Paper>
  );
}

// const mapDispatchToProps = (dispatch: Dispatch) => ({
//   setGridState: (gridState: GridState) =>
//     dispatch({
//       type: "SET_GRID_STATE",
//       gridState,
//     }),
// });

// const ws = withStyles(styles);
// const connector = connect(mapStateToProps, mapDispatchToProps);
// const ConnectedRepositoryTable = connector(RepositoryTable);
export default withStyles(styles)(RepositoryTable);

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(StyledRepositoryTable);
