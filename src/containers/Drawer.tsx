import * as React from "react";
import { styled, Theme, CSSObject } from "@mui/material/styles";
import MuiDrawer, { DrawerProps as MuiDrawerProps } from "@mui/material/Drawer";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { DRAWER_ITEMS, DRAWER_WIDTH } from "../constants/drawer.constants";
import SpaceDashboardOutlinedIcon from "@mui/icons-material/SpaceDashboardOutlined";
import DiamondOutlinedIcon from "@mui/icons-material/DiamondOutlined";
const openedMixin = (theme: Theme): CSSObject => ({
  width: DRAWER_WIDTH,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

export const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const DrawerFooter = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "space-around",
  padding: theme.spacing(0, 1),
  marginTop: "auto",
  paddingBottom: 24,
}));

interface DrawerProps extends MuiDrawerProps {
  onToggle: (isOpen: boolean) => void;
}

const StyledDrawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: DRAWER_WIDTH,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  backgroundColor: "#131430",
  "& .MuiDrawer-paper": {
    backgroundColor: theme.palette.primary.main,
    color: "#fff",
    ...(open
      ? {
          ...openedMixin(theme),
        }
      : { ...closedMixin(theme) }),
  },
  ...(open && {
    ...openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
  }),
}));

const DrawerItemIcon = styled(ListItemIcon)(({ theme }) => ({
  color: "#fff",
}));

const activeIndex = 4;
export default function Drawer({ onToggle }: DrawerProps) {
  const [open, setOpen] = React.useState(true);
  const handleToggleDrawer = () => {
    setOpen((prevValue) => {
      const newValue = !prevValue;
      onToggle(newValue);
      return newValue;
    });
  };
  return (
    <StyledDrawer variant="permanent" open={open}>
      <DrawerHeader>
        {open ? (
          <Typography variant="h5" noWrap component="div">
            VegaPay
          </Typography>
        ) : null}
        <IconButton
          onClick={handleToggleDrawer}
          size="large"
          sx={{
            padding: 0,
            backgroundColor: "rgba(255, 255, 255,0.1)",
            width: 36,
            height: 36,
            borderRadius: 2,
          }}
        >
          {open ? (
            <ChevronLeftIcon
              sx={{
                color: "#fff",
                px: 0,
              }}
            />
          ) : (
            <ChevronRightIcon
              sx={{
                color: "#fff",
                px: 0,
              }}
            />
          )}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List>
        {DRAWER_ITEMS.map((item, index) => (
          <ListItem
            key={item.label}
            disablePadding
            sx={{
              display: "block",
              ...(activeIndex === index
                ? {
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                    borderLeft: "6px solid #4BA4F8",
                  }
                : {
                    borderLeft: "6px solid transparent",
                  }),
            }}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <DrawerItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                {item.icon === "drawer" ? (
                  <SpaceDashboardOutlinedIcon />
                ) : (
                  <DiamondOutlinedIcon />
                )}
              </DrawerItemIcon>
              <ListItemText
                primary={item.label}
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      {open ? (
        <DrawerFooter>
          <Typography variant="body1" noWrap component="p">
            VegaPay Version 1.005
          </Typography>
          <Typography
            variant="body2"
            noWrap
            component="p"
            sx={{
              color: "rgba(255, 255, 255, 0.6)",
            }}
          >
            Copyright VegaPay Techno Pvt Limited
          </Typography>
        </DrawerFooter>
      ) : null}
    </StyledDrawer>
  );
}
