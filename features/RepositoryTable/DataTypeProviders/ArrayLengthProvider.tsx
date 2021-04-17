import { DataTypeProvider } from "@devexpress/dx-react-grid";

export default function ArrayLengthProvider(
  props: React.ComponentProps<typeof DataTypeProvider>
) {
  return (
    <DataTypeProvider
      formatterComponent={({ value }) => value.length}
      {...props}
    />
  );
}
