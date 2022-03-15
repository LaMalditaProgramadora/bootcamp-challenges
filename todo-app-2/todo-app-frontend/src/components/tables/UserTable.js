import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import DeleteIcon from "@mui/icons-material/Delete";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import AddUserDialog from "../dialogs/AddUserDialog";
import Paper from "@mui/material/Paper";
import { useState } from "react";
import { getIdUser } from "../../services/StorageService";
import { removeUser } from "../../services/GroupService";
import { Snackbar } from "@mui/material";

const UserTable = ({ id, users, reload }) => {
  const [snackbar, setSnackbar] = useState({ open: false, message: "" });
  const [openAddUser, setOpenAddUser] = useState(false);

  const removeUserFromApi = (idUser) => {
    removeUser(id, idUser).then((data) => {
      setSnackbar({ open: true, message: data.message });
      if (data.status === 1) {
        reload();
      }
    });
  };

  return (
    <>
      <AddUserDialog
        idGroup={id}
        open={openAddUser}
        setOpen={setOpenAddUser}
        reload={reload}
      ></AddUserDialog>
      <PersonAddIcon
        style={{ cursor: "pointer" }}
        onClick={() => {
          setOpenAddUser(true);
        }}
      />
      <br></br>
      <TableContainer component={Paper}>
        <Table size="small" sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>Usuario</TableCell>
              <TableCell>Correo</TableCell>
              <TableCell width={40}>Eliminar</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow
                key={user._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {user._id}
                </TableCell>
                <TableCell>{user.username}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell width={40}>
                  {user._id !== getIdUser() ? (
                    <DeleteIcon
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        removeUserFromApi(user._id);
                      }}
                    />
                  ) : (
                    <DeleteIcon color="disabled" />
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
        message={snackbar.message}
        onClose={() => setSnackbar({ open: false, message: "" })}
      />
    </>
  );
};

export default UserTable;
