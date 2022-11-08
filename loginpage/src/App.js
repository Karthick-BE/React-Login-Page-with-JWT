import "./App.css";
import Login from "./Pages/Login";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./Pages/Profile";
import { getToken } from "./Routes/Common";
import PrivateRoute from "./Routes/PrivateRoute"



function App() {
  const[authLoading,setAuthLoading]=useState(false)
  useEffect(()=>{
    const token=getToken();
    if(token){
      setAuthLoading(true)
    }
  },[])
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route element={<PrivateRoute authLoading={authLoading} />} >
          <Route path="/Profile" element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
