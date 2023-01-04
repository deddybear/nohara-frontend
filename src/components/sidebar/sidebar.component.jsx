import { useTheme } from "@mui/material/styles";
import {
  IconButton,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import LogoutIcon from "@mui/icons-material/Logout";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAuth } from "../../hooks/useAuth";
import { Drawer, DrawerHeader } from "./sidebar.styles";
import { SidebarData as ListMenu } from "../../data/sidebar.dummy";
import { useNavigate } from "react-router-dom";

//TODO : component dibuat untuk dashboard

export const SideBar = (props) => {
  const theme = useTheme();
  const drawerWidth = useSelector((state) => state.drawerWidth);
  const open = useSelector((state) => state.open);
  const { user, logout } = useAuth();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleMenu = () => {
    dispatch({ type: "CLOSE_SIDEBAR" });
  };

  const handleChooseMenu = (link, ChooseMenu) => {
    navigate(link);
    dispatch({ type: ChooseMenu });
  };

  return (
    <Drawer variant="permanent" open={open} drawerwidth={drawerWidth}>
      <DrawerHeader>
        Menu Dashboard
        <IconButton onClick={handleMenu}>
          {theme.direction === "rtl" ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List>
        {ListMenu.map((menu, index) => (
          <ListItem key={menu.name} disablePadding sx={{ display: "block" }}>
            <ListItemButton
              onClick={() => handleChooseMenu(menu.link, menu.action)}
              key={menu.name}
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                {menu.icon}
              </ListItemIcon>
              <ListItemText
                primary={menu.name}
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
        ))}
        {!!user && (
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
            key={"logout"}
            onClick={logout}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary="Logout" sx={{ opacity: open ? 1 : 0 }} />
          </ListItemButton>
        )}
      </List>
      <Divider />
    </Drawer>
  );
};
