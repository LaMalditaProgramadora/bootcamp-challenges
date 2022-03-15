import GroupIcon from "@mui/icons-material/Group";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonIcon from "@mui/icons-material/Person";
import TaskIcon from "@mui/icons-material/Task";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListSubheader from "@mui/material/ListSubheader";
import * as React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CreateGroupDialog from "./dialogs/CreateGroupDialog";
import { Drawer } from "./mui/Drawer";
import Item from "./mui/Item";
import ItemButton from "./mui/ItemButton";
import { getIdUser, getUsername } from "../services/StorageService";
import { getGroups } from "../services/UserService";

const SideBar = () => {
  const [groups, setGroups] = useState([]);
  const [option, setOption] = useState("/task");
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const goTo = (route) => {
    setOption(route);
    navigate(route, { replace: true });
  };

  const getGroupsFromApi = () => {
    getGroups(getIdUser()).then((data) => {
      if (data.data) {
        setGroups(data.data);
      }
    });
  };

  useEffect(() => {
    getGroupsFromApi();
  }, []);

  return (
    <>
      <CreateGroupDialog
        open={open}
        setOpen={setOpen}
        reload={getGroupsFromApi}
      />
      <Drawer variant="permanent" open={true}>
        <List component="nav">
          <Item description={getUsername()} icon={<PersonIcon />} />
          <Divider sx={{ my: 1 }} />
          <ItemButton
            onClick={() => goTo("/task")}
            description="Mis Tareas"
            icon={<TaskIcon />}
            selected={"/task" === option ? true : false}
          />
          <Divider sx={{ my: 1 }} />
          <ItemButton
            onClick={() => setOpen(true)}
            description="Crear Grupo"
            icon={<GroupIcon />}
            selected={false}
          />
          <Divider sx={{ my: 1 }} />
          <ListSubheader component="div">Mis Grupos</ListSubheader>
          {groups.map((group) => {
            return (
              <ItemButton
                key={group._id}
                onClick={() => goTo(`/group/${group._id}`)}
                description={group.name}
                icon={<GroupIcon />}
                selected={`/group/${group._id}` === option ? true : false}
              />
            );
          })}
          <Divider sx={{ my: 1 }} />
          <ItemButton
            onClick={() => goTo("/login")}
            description="Cerrar Sesión"
            icon={<LogoutIcon />}
            selected={false}
          />
        </List>
      </Drawer>
    </>
  );
};

export default SideBar;
