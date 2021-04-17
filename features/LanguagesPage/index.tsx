import {
  Grid,
  Table,
  TableHeaderRow,
} from "@devexpress/dx-react-grid-material-ui";
import { SortingState, IntegratedSorting } from "@devexpress/dx-react-grid";
import Paper from "@material-ui/core/Paper";
import { useRepositories } from "../useRepositories";

interface Repository {
  language: string | null;
}

const prepareLanguages = (repositories: Repository[]) => {
  const emptyAccumulator: { [key: string]: number } = {};
  return repositories
    .map((repo) => repo.language)
    .reduce(
      (acc, el) => ({
        ...acc,
        [el || "null"]: acc[el || "null"] ? acc[el || "null"] + 1 : 1,
      }),
      emptyAccumulator
    );
};

export default () => {
  const [repositories] = useRepositories();
  const languages = prepareLanguages(repositories);
  const data = Object.entries(languages).map(([key, value]) => ({
    language: key,
    languageCount: value,
  }));
  return (
    <Paper>
      <Grid
        columns={[
          {
            name: "language",
            title: "Language",
          },
          {
            name: "languageCount",
            title: "Count",
          },
        ]}
        rows={data}
      >
        <SortingState
          defaultSorting={[{ columnName: "languageCount", direction: "desc" }]}
        />
        <IntegratedSorting />
        <Table />
        <TableHeaderRow showSortingControls />
      </Grid>
    </Paper>
  );
};
