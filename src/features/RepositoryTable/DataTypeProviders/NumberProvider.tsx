import { DataTypeProvider } from "@devexpress/dx-react-grid";

export default function NumberProvider(
  props: React.ComponentProps<typeof DataTypeProvider>
) {
  return (
    <DataTypeProvider
      availableFilterOperations={[
        "equal",
        "greaterThan",
        "lessThan",
        "greaterThanOrEqual",
        "lessThanOrEqual",
      ]}
      {...props}
    />
  );
}
