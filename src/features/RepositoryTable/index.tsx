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
import {
  setColumnVisibilityState,
  setFilteringState,
  setSearchState,
  setSortingState,
} from "./gridStateSlice";
import {
  ChipListProvider,
  DateTypeProvider,
  LinkTypeProvider,
  ArrayLengthProvider,
  BooleanTypeProvider,
  CheckBoxProvider,
} from "./DataTypeProviders";
import NumberProvider from "./DataTypeProviders/NumberProvider";

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
  const { filteringState, sortingState, searchState, columnVisibilityState } = useSelector(
    (state: RootState) => state.gridStateReducer
  );
  const repositories = useSelector(
    (state: RootState) => state.repositoriesReducer.repositories
  );
  const dispatch = useAppDispatch();

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
        <NumberProvider for={["stars", "pullRequestCount", "issueCount"]} />
        <FilteringState
          defaultFilters={[]}
          filters={filteringState}
          onFiltersChange={(filters) => dispatch(setFilteringState(filters))}
        />
        <SortingState
          defaultSorting={[]}
          sorting={sortingState}
          onSortingChange={(sorting) => dispatch(setSortingState(sorting))}
        />
        <PagingState defaultCurrentPage={0} pageSize={40} />
        <SearchState
          value={searchState}
          onValueChange={(search) => dispatch(setSearchState(search))}
        />
        <IntegratedFiltering
          columnExtensions={[
            {
              columnName: "topics",
              predicate: (_, filter, row) =>
                filter.operation === "empty"
                  ? row.topics.length === 0
                  : row.topics.reduce(
                      (acc: boolean, el: string) =>
                        (filter.value && el.includes(filter.value)) || acc,
                      false
                    ),
            },
            {
              columnName: "collaborators",
              predicate: (_, filter, row) =>
                filter.operation === "empty"
                  ? row.collaborators.length === 0
                  : row.collaborators?.reduce(
                      (acc: boolean, el: string) =>
                        (filter.value && el.includes(filter.value)) || acc,
                      false
                    ),
            },
          ]}
        />
        <IntegratedSorting />
        <IntegratedPaging />
        <Table columnExtensions={tableColumnExtensions} />
        <TableHeaderRow showSortingControls />
        <TableFilterRow showFilterSelector />
        <TableColumnVisibility
          hiddenColumnNames={columnVisibilityState}
          onHiddenColumnNamesChange={columnVisibility => dispatch(setColumnVisibilityState(columnVisibility))}
        />
        <Toolbar />
        <SearchPanel />
        <ColumnChooser />
        <PagingPanel />
      </Grid>
    </Paper>
  );
}
