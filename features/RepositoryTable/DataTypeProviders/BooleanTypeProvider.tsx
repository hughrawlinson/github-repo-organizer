import { DataTypeProvider } from "@devexpress/dx-react-grid";
import { Chip } from "@mui/material";

export default function BooleanTypeProvider(
  props: React.ComponentProps<typeof DataTypeProvider>
) {
  return (
    <DataTypeProvider
      formatterComponent={({ value }) => (
        <Chip label={value ? "True" : "False"} />
      )}
      {...props}
    />
  );
}
