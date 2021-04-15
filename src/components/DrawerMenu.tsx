import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { createContext, ReactNode, useContext, useState } from "react";
import { Link } from "react-router-dom";

const DrawerMenuContext = createContext({
  drawerOpen: false,
  toggleDrawer: (_?: boolean) => {},
});

type DrawerMenuWrapperProps = {
  children: ReactNode;
};

export function DrawerMenuWrapper({ children }: DrawerMenuWrapperProps) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  function toggleDrawer(newState?: boolean) {
    if (typeof newState === "undefined") {
      setDrawerOpen(!drawerOpen);
      return;
    } else {
      setDrawerOpen(newState);
    }
  }

  return (
    <DrawerMenuContext.Provider value={{ drawerOpen, toggleDrawer }}>
      {children}
    </DrawerMenuContext.Provider>
  );
}

export function DrawerMenuToggleButton(
  props: React.ComponentProps<typeof IconButton>
) {
  const { toggleDrawer } = useContext(DrawerMenuContext);
  return (
    <IconButton onClick={() => toggleDrawer()} {...props}>
      <MenuIcon />
    </IconButton>
  );
}

export function DrawerMenu() {
  const { drawerOpen, toggleDrawer } = useContext(DrawerMenuContext);
  return (
    <Drawer open={drawerOpen} onClose={() => toggleDrawer(false)}>
      <div
        onClick={() => toggleDrawer(false)}
        onKeyDown={() => toggleDrawer(false)}
      >
        <List>
          <ListItem button>
            <Link to={process.env.PUBLIC_URL + "/"}>
              <ListItemText primary="Repositories" />
            </Link>
          </ListItem>
          <ListItem button>
            <Link to={process.env.PUBLIC_URL + "/topics"}>
              <ListItemText primary="Topics" />
            </Link>
          </ListItem>
          <ListItem button>
            <Link to={process.env.PUBLIC_URL + "/licenses"}>
              <ListItemText primary="Licenses" />
            </Link>
          </ListItem>
          <ListItem button>
            <Link to={process.env.PUBLIC_URL + "/languages"}>
              <ListItemText primary="Languages" />
            </Link>
          </ListItem>
        </List>
      </div>
    </Drawer>
  );
}
