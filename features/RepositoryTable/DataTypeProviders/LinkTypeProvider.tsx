import { DataTypeProvider } from "@devexpress/dx-react-grid";

export default function LinkTypeProvider(
  props: React.ComponentProps<typeof DataTypeProvider>
) {
  return (
    <DataTypeProvider
      formatterComponent={({ value }) => {
        if (value.href) {
          return <a href={value.href}>{value.title}</a>;
        }
        return <p>{value.title}</p>;
      }}
      {...props}
    />
  );
}
