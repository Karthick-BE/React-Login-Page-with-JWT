import "./App.css";
import Login from "./Pages/Login";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./Pages/Profile";
import { getToken } from "./Routes/Common";
import PrivateRoute from "./Routes/PrivateRoute";

function App() {
  const token = getToken();
  const [authLoading] = useState(token ? true : false);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route element={<PrivateRoute authLoading={authLoading} />}>
            <Route path="/Profile" element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
