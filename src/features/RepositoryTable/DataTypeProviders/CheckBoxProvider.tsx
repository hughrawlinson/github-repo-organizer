import { DataTypeProvider } from "@devexpress/dx-react-grid";

export default function CheckBoxProvider(
  props: React.ComponentProps<typeof DataTypeProvider>
) {
  return (
    <DataTypeProvider
      formatterComponent={({ value }) => (
        <input type="checkbox" value={value} />
      )}
      {...props}
    />
  );
}
