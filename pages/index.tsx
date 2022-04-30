import { Box, Container } from "@mui/material";
import Link from "next/link";

export default function HomePage() {
  return (
    <Container>
      <Box style={{ marginTop: 50 }}>
        <h1>GitHub Repo Organizer</h1>
        <Link href="/my/repositories">My Repositories</Link>
      </Box>
    </Container>
  );
}
