import React from 'react'
import { useState } from 'react'
import {styled, FormGroup , FormControl,InputLabel,Input,Button,Typography } from '@mui/material'
import { addUser } from '../services/api'
import { useNavigate } from 'react-router-dom'

const defaultValue={
  name:'',
  username:'',
  email:'',
  number:'',
}

//styling
const FGroup=styled(FormGroup)`
width:  50%;
margin: 5% auto 0 auto;
& > div {
  margin-top:20px;
}

`
const Btn=styled(Button)`
  margin-top:10px
`

function AddUser() {

const navigate=useNavigate();

const [user,setUser]=useState(defaultValue)

  const OnValueChange=(e)=>{
    console.log(e.target.name,e.target.value);
    setUser({...user,[e.target.name] : e.target.value }); 
  }

  const addUserDetail=async()=>{
    await addUser(user)
    navigate('/all');
  }
  return (
    <div>
      <FGroup>
      <Typography variant='h4' >ADD USER</Typography>


        <FormControl>
          <InputLabel>Name</InputLabel>
          <Input onChange={(e)=>OnValueChange(e)} name='name'/>
        </FormControl>
        <FormControl>
          <InputLabel>Username</InputLabel>
          <Input onChange={(e)=>OnValueChange(e)} name='username'/>
        </FormControl>
        <FormControl>
          <InputLabel>Email</InputLabel>
          <Input onChange={(e)=>OnValueChange(e)} name='email'/>
        </FormControl>
        <FormControl>
          <InputLabel>Phone Number</InputLabel>
          <Input onChange={(e)=>OnValueChange(e)} name='number' />

        </FormControl>
          <Btn variant='contained' onClick={()=>addUserDetail()}>Add Details</Btn>

      </FGroup>
    </div>
  )
}

export default AddUser
