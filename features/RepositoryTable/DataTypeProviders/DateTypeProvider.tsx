import { DataTypeProvider } from "@devexpress/dx-react-grid";

export default function DateTypeProvider(
  props: React.ComponentProps<typeof DataTypeProvider>
) {
  return (
    <DataTypeProvider
      formatterComponent={({ value }) => {
        // TODO: the type from quicktype should handle this, not sure why it's like this.
        const d = new Date(value);
        return <>{d.toLocaleDateString()}</>;
      }}
      availableFilterOperations={[
        "contains",
        "greaterThan",
        "lessThan",
        "greaterThanOrEqual",
        "lessThanOrEqual",
      ]}
      {...props}
    />
  );
}
