import { DataTypeProvider } from "@devexpress/dx-react-grid";

export default function LinkTypeProvider(
  props: React.ComponentProps<typeof DataTypeProvider>
) {
  return (
    <DataTypeProvider
      formatterComponent={({ value: { href, title } }) => (
        <a href={href}>{title}</a>
      )}
      {...props}
    />
  );
}
