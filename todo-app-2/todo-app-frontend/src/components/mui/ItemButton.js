import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import * as React from "react";

const ItemButton = ({ description, onClick, icon, selected }) => {
  return (
    <ListItemButton onClick={onClick} selected={selected}>
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText primary={description} />
    </ListItemButton>
  );
};

export default ItemButton;
