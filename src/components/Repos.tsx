import React from "react";
import { Repository } from "../sagas";
import RepositoryTable from "./RepositoryTable";

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
