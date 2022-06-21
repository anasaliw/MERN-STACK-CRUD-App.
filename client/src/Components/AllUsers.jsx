import React, { useState } from "react";
import {
  TableContainer,
  Table,
  TableCell,
  TableBody,
  TableRow,
  TableHead,
  styled,
  Button,
} from "@mui/material";
import { useEffect } from "react";
import { fetchUsers,deleteUser } from "../services/api";
import {Link} from 'react-router-dom'


 const TContainer=styled(TableContainer)`
    width:90%;
    margin:30px auto 0 auto;
    border-radius:10px;
    `
    const TCell= styled(TableCell)`
    font-size:14px;
    font-weight:700;
    `
  const TRow=styled(TableRow)`
  background:#F0F0F0;
  margin-top: 2px:
  `
  const THead=styled(TableHead)`
  background:#CDCCCC;
  
  `


function AllUsers() {
  const [users, setUser] = useState([]);
  
  useEffect(() => {
    getUsers();
  }, []);
  
  const getUsers = async () => {
    const response = await fetchUsers();
    setUser(response.data);
  };

  const deleteUserDetail=async(id)=>{
    await deleteUser(id);
    getUsers();

  }


  



  return (
    <div>
      <TContainer>
        <Table>
          <THead>
            <TableRow>
              <TCell>ID</TCell>
              <TCell>Name</TCell>
              <TCell>USERNAME</TCell>
              <TCell>EMAIL</TCell>
              <TCell>PHONE NUMBER</TCell>
              <TCell>OPERATIONS</TCell>
            </TableRow>
          </THead>

          <TableBody>
            {users.map( (user) => (

              
              <TRow key={user._id}>
                <TableCell>{user._id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.username}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.number}</TableCell>
                <TableCell>
                  <Button variant="contained" style={{ marginRight : 20 }} component={Link} to={`/edit/${user._id}`} >Edit</Button>
                  <Button variant="contained" style={{ backgroundColor : "red" }} onClick={()=>deleteUserDetail(user._id)}>Delete</Button>
                </TableCell>
              </TRow>
            ))}
          </TableBody>
        </Table>
      </TContainer>
    </div>
  );
}

export default AllUsers;
