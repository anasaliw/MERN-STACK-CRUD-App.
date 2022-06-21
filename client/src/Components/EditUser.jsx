
import React from 'react'
import {FormGroup,FormControl,InputLabel,Input,styled,Button, Typography} from '@mui/material'
import { useState } from 'react'
import { getSingleData,editSingleData } from '../services/api'
import { useEffect } from 'react'
import { useParams,useNavigate } from 'react-router-dom'


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

const defaultValue={
    name : '',
    username : '',
    email:'',
    number:'',
}
function EditUser() {
    
    const {id} = useParams();
    
    useEffect(()=>{
        loadUserDetails();
    },[])


    
    const loadUserDetails=async()=>{
        const res= await getSingleData(id)
        setUser(res.data);
     }
     
     
     const [user,setUser]=useState(defaultValue);
     
    const OnValueChange=(e)=>{
        console.log(e.target.value);
        setUser({...user,[e.target.name] : e.target.value})
        
    }


    //Button Function
    const navigate=useNavigate();

    const editData=async()=>{
        await editSingleData(user,id);
        navigate('/all')
    }

    
    

  return (
    <FGroup>
        <Typography variant='h4' >EDIT USER</Typography>
        <FormControl>
            <InputLabel>Name</InputLabel>
            <Input value={user.name} name="name" onChange={(e)=>OnValueChange(e)} />
        </FormControl>
        <FormControl>
            <InputLabel>Username</InputLabel>
            <Input value={user.username} name="username" onChange={(e)=>OnValueChange(e)} />
        </FormControl>
        <FormControl>
            <InputLabel>Email</InputLabel>
            <Input value={user.email} name="email" onChange={(e)=>OnValueChange(e)}/>
        </FormControl>
        <FormControl>
            <InputLabel>Number</InputLabel>
            <Input value={user.number} name="number" onChange={(e)=>OnValueChange(e)}/>
        </FormControl>
        <Btn variant='contained' onClick={()=>editData()}  >Edit User</Btn>
    </FGroup>
    
  )
}
export default EditUser
