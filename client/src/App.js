import './App.css';
import React from 'react';

//Imports
import Navbar from './Components/Navbar';
import AllUsers from './Components/AllUsers';
import AddUser from './Components/AddUser';
import CodeForInterview from './Components/CodeForInterview';
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import EditUser from './Components/EditUser';

function App() {
  return (
    <div className="App">
      <BrowserRouter> 
      <Navbar/>
      <Routes>
      <Route path='/' element={<CodeForInterview/>} />
      <Route path='/all' element={<AllUsers/>} />
      <Route path='/add' element={<AddUser/>}/>
      <Route path='/edit/:id' element={<EditUser/> } ></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
