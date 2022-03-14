import GroupIcon from "@mui/icons-material/Group";
import PersonIcon from "@mui/icons-material/Person";
import TaskIcon from "@mui/icons-material/Task";
import LogoutIcon from "@mui/icons-material/Logout";
import { ListItem } from "@mui/material";
import Divider from "@mui/material/Divider";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import { styled } from "@mui/material/styles";
import * as React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CreateGroupDialog from "./dialogs/CreateGroupDialog";

const drawerWidth = 240;

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

const SideBar = () => {
  const [username, setUsername] = useState("");
  const [groups, setGroups] = useState([]);
  const [option, setOption] = useState("");
  const [idUser, setIdUser] = useState("");
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const initData = () => {
    setUsername("Usuario 1");
    const groupAux = [
      { _id: "123456", name: "Grupo 1" },
      { _id: "456789", name: "Grupo 2" },
    ];
    setGroups(groupAux);
    setOption("task");
    setIdUser("12045");
  };

  useEffect(() => {
    initData();
  }, []);

  const goTo = (route) => {
    navigate(route, { replace: true });
  };

  const openDialog = () => {
    setOpen(true);
  };

  const closeDialog = () => {
    setOpen(false);
  };

  return (
    <>
      <CreateGroupDialog
        open={open}
        idUser={idUser}
        closeDialog={closeDialog}
      />
      <Drawer variant="permanent" open={true}>
        <List component="nav">
          <ListItem>
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText primary={username} />
          </ListItem>
          <Divider sx={{ my: 1 }} />
          <ListItemButton
            onClick={() => {
              setOption("task");
              goTo("/todo-app/task");
            }}
            selected={"task" === option ? true : false}
          >
            <ListItemIcon>
              <TaskIcon />
            </ListItemIcon>
            <ListItemText primary="Mis Tareas" />
          </ListItemButton>
          <Divider sx={{ my: 1 }} />
          <ListItemButton onClick={openDialog}>
            <ListItemIcon>
              <GroupIcon />
            </ListItemIcon>
            <ListItemText primary="Crear Grupo" />
          </ListItemButton>
          <Divider sx={{ my: 1 }} />
          <ListSubheader component="div">Mis Grupos</ListSubheader>
          {groups.map((group) => {
            return (
              <ListItemButton
                key={group._id}
                onClick={() => {
                  setOption(group._id.toString());
                  goTo(`/todo-app/group/${group._id}`);
                }}
                selected={group._id.toString() === option ? true : false}
              >
                <ListItemIcon>
                  <GroupIcon />
                </ListItemIcon>
                <ListItemText primary={group.name} />
              </ListItemButton>
            );
          })}
          <Divider sx={{ my: 1 }} />
          <ListItemButton onClick={() => goTo("/login")}>
            <ListItemIcon>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary="Cerrar Sesión" />
          </ListItemButton>
        </List>
      </Drawer>
    </>
  );
};

export default SideBar;
