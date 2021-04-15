import { Repository } from "../sagas";
import RepositoryTable from "../components/RepositoryTable";

type ReposProps = {
  repositories: Repository[];
  queryParams: { [key: string]: string };
};

export default function Repos(props: ReposProps) {
  return (
    <>
      <RepositoryTable repositories={props.repositories} />
    </>
  );
}
