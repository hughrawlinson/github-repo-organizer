import { useSelector } from "react-redux";
import Paper from "@material-ui/core/Paper";
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
import { RootState, useAppDispatch } from "../../index";
import { setGridState } from "./gridStateSlice";
import {
  ChipListProvider,
  DateTypeProvider,
  LinkTypeProvider,
  ArrayLengthProvider,
  BooleanTypeProvider,
  CheckBoxProvider,
} from "./DataTypeProviders";

const tableColumnExtensions = [
  { columnName: "topics", wordWrapEnabled: true },
  { columnName: "description", wordWrapEnabled: true },
];

export type Repository = {
  id: string;
  name: string;
  nameWithOwner: string;
  description: string | null;
  createdAt: Date;
  topics: string[];
  stars: number;
  language: string | null;
  isPrivate: boolean;
  isArchived: boolean;
  url: string;
  owner: string;
  isFork: boolean;
  licenseNickname: string | null;
  vulnerabilityAlerts: unknown[];
  collaborators: string[] | null;
  issueCount: number;
  pullRequestCount: number;
};

export default function RepositoryTable() {
  const gridState = useSelector((state: RootState) => state.gridStateReducer);
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
    const action = setGridState({ ...gridState, columnVisibilityState });
    console.log(action);
    dispatch(action);
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
