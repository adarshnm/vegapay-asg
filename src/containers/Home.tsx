import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Drawer from "./Drawer";
import { DRAWER_WIDTH } from "../constants/drawer.constants";
import { IconButton } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CardSale from "./CardSale";
interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer - 1,
  boxShadow:
    "0px 2px 2px -1px rgba(0,0,0,0.02), 0px 4px 2px 0px rgba(0,0,0,0.01), 0px 1px 9px 0px rgba(0,0,0,0.05)",
  backgroundColor: "#fff",
  ...(open
    ? {
        marginLeft: DRAWER_WIDTH,
        width: `calc(100% - ${DRAWER_WIDTH}px)`,
        transition: theme.transitions.create(["width", "margin"], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      }
    : {
        width: `calc(100% - 65px)`,
      }),
}));

export default function Home() {
  const [open, setOpen] = React.useState(true);

  const onDrawerToggle = (isOpen: boolean) => {
    setOpen(isOpen);
  };

  return (
    <Box sx={{ backgroundColor: "#eceff3" }}>
      <CssBaseline />
      <AppBar open={open}>
        <Toolbar
          sx={{
            justifyContent: "flex-end",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Box>
              <Typography
                variant="h6"
                noWrap
                component="p"
                sx={{
                  color: "#000",
                }}
              >
                Alpha User
              </Typography>
              <Typography
                variant="subtitle2"
                noWrap
                component="p"
                sx={{
                  color: "#c2c2c2",
                }}
              >
                Last Login: 20/05/2023 12:08:40
              </Typography>
            </Box>
            <IconButton>
              <KeyboardArrowDownIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer onToggle={onDrawerToggle} />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          mt: 8,
          ...(open
            ? { paddingLeft: `calc(${DRAWER_WIDTH}px + 24px)` }
            : { paddingLeft: `calc(${65}px + 24px)` }),
        }}
      >
        <CardSale />
      </Box>
    </Box>
  );
}
