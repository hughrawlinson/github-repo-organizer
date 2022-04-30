import { DataTypeProvider } from "@devexpress/dx-react-grid";
import { Chip } from "@mui/material";

export default function ChipListProvider(
  props: React.ComponentProps<typeof DataTypeProvider>
) {
  return (
    <DataTypeProvider
      formatterComponent={({ value }: { value: string[] }) =>
        value ? (
          <>
            {value.map((v) => (
              <Chip style={{ margin: "3px" }} key={v} label={v} />
            ))}
          </>
        ) : null
      }
      availableFilterOperations={['search', 'empty']}
      {...props}
    />
  );
}
