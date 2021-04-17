import dynamic from "next/dynamic";

const DynamicPage = dynamic(() => import("../../features/LanguagesPage"), {
  ssr: false,
});

export default function Index() {
  return <DynamicPage />;
}

export {};
