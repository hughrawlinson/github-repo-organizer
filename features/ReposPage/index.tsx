import { RepositoryTable } from "../RepositoryTable";

type ReposPageProps = {
  search?: string;
};

export default function ReposPage(props: ReposPageProps | null) {
  return (
    <>
      <RepositoryTable {...props} />
    </>
  );
}
