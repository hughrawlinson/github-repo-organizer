import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { createContext, ReactNode, useContext, useState } from "react";
import Link from "next/link";

interface DrawerMenuContext {
  drawerOpen: boolean;
  toggleDrawer: (arg?: boolean) => any;
}

const DrawerMenuContext = createContext<DrawerMenuContext>({
  drawerOpen: true,
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
    <IconButton
      onClick={() => toggleDrawer()}
      {...props}
      size="large"
      aria-label="Open menu"
    >
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
            <Link href={`${process.env.PUBLIC_URL || ""}/my/repositories`}>
              <ListItemText primary="Repositories" />
            </Link>
          </ListItem>
          <ListItem button>
            <Link href={`${process.env.PUBLIC_URL || ""}/my/topics`}>
              <ListItemText primary="Topics" />
            </Link>
          </ListItem>
          <ListItem button>
            <Link href={`${process.env.PUBLIC_URL || ""}/my/licenses`}>
              <ListItemText primary="Licenses" />
            </Link>
          </ListItem>
          <ListItem button>
            <Link href={`${process.env.PUBLIC_URL || ""}/my/languages`}>
              <ListItemText primary="Languages" />
            </Link>
          </ListItem>
        </List>
      </div>
    </Drawer>
  );
}
