import { LoginButton, LoginStateSwitch } from "../UserLogin";
import { useRepositories } from "../useRepositories";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { DrawerMenuToggleButton } from "../DrawerMenu";

function TopNav() {
  const [_, refreshRepositories] = useRepositories();

  return (
    <AppBar>
      <Toolbar>
        <LoginStateSwitch selectedLoginState={true}>
          <DrawerMenuToggleButton
            sx={{
              marginLeft: -12,
              marginRight: 20,
            }}
            color="inherit"
            aria-label="Menu"
          />
        </LoginStateSwitch>
        <Typography variant="h6" color="inherit" sx={{ flexGrow: 1 }}>
          GitHub Repo Organizer
        </Typography>
        <LoginButton color="inherit" />
        <LoginStateSwitch selectedLoginState={true}>
          <Button onClick={() => refreshRepositories()} color="inherit">
            Refresh
          </Button>
        </LoginStateSwitch>
      </Toolbar>
    </AppBar>
  );
}

export default TopNav;
