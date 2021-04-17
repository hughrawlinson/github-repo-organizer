import dynamic from "next/dynamic";

const DynamicRepos = dynamic(() => import("../features/ReposPage"), {
  ssr: false,
});

export default function Index() {
  return <DynamicRepos />;
}

export {};
