import {
  Grid,
  Table,
  TableHeaderRow,
} from "@devexpress/dx-react-grid-material-ui";
import { SortingState, IntegratedSorting } from "@devexpress/dx-react-grid";
import Paper from "@mui/material/Paper";
import { useRepositories } from "../useRepositories";

interface Repository {
  licenseNickname: string | null;
}

const prepareTags = (repositories: Repository[]) => {
  const emptyAccumulator: { [key: string]: number } = {};
  return repositories
    .map((repo) => repo.licenseNickname)
    .reduce((acc, el) => {
      const key = el || "null";
      return {
        ...acc,
        [key]: acc[key] ? acc[key]! + 1 : 1,
      };
    }, emptyAccumulator);
};

const LicensesPage = () => {
  const [repositories] = useRepositories();
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

export default LicensesPage;
