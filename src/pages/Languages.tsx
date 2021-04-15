import {
  Grid,
  Table,
  TableHeaderRow,
} from "@devexpress/dx-react-grid-material-ui";
import { SortingState, IntegratedSorting } from "@devexpress/dx-react-grid";
import Paper from "@material-ui/core/Paper";

type Repository = {
  language: string;
};

const prepareLanguages = (repositories: Repository[]) => {
  const emptyAccumulator: { [key: string]: number } = {};
  return repositories
    .map((repo) => repo.language)
    .reduce(
      (acc, el) => ({
        ...acc,
        [el]: acc[el] ? acc[el] + 1 : 1,
      }),
      emptyAccumulator
    );
};

type LanguagesProps = {
  repositories?: Repository[];
};

export default (props: LanguagesProps) => {
  if (!props.repositories) {
    return <p>Loading</p>;
  }
  const languages = prepareLanguages(props.repositories);
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
