import { DataTypeProvider } from "@devexpress/dx-react-grid";

export default function DateTypeProvider(
  props: React.ComponentProps<typeof DataTypeProvider>
) {
  return (
    <DataTypeProvider
      formatterComponent={({ value }) => value.toLocaleDateString()}
      {...props}
    />
  );
}
