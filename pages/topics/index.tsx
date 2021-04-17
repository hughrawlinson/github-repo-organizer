import dynamic from "next/dynamic";

const DynamicPage = dynamic(() => import("../../features/TopicsPage"), {
  ssr: false,
});

export default function Index() {
  return <DynamicPage />;
}

export {};
