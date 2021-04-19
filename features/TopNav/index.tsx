import { LoginButton, LoginStateSwitch } from "../UserLogin";
import { useRepositories } from "../useRepositories";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  withStyles,
  WithStyles,
} from "@material-ui/core";
import { DrawerMenuToggleButton } from "../DrawerMenu";

const styles = () => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
});

function TopNav({ classes }: WithStyles<typeof styles>) {
  const [_, refreshRepositories] = useRepositories();

  return (
    <AppBar>
      <Toolbar>
        <LoginStateSwitch selectedLoginState={true}>
          <DrawerMenuToggleButton
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
          />
        </LoginStateSwitch>
        <Typography variant="h6" color="inherit" className={classes.grow}>
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

export default withStyles(styles)(TopNav);
