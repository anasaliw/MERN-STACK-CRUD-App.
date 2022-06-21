import React from 'react'
import {AppBar,Toolbar,styled} from '@mui/material';
import {NavLink} from 'react-router-dom';

const Para =styled(NavLink)`
    font-size:20px;
    margin-right:20px;
    color:inherit;
    text-decoration:none;
`

function Navbar() {
  return (
    <div>
        <AppBar position="static">
            <Toolbar>
                <Para to='/'>Introduction</Para>
                <Para to='all'>All Users</Para>
                <Para to='add'>Add User</Para>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar