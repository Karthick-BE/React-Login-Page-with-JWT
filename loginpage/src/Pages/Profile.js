import React from "react";
import "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { SessionExpire } from "../Routes/SessionExpire";
import { removeUserSession } from "../Routes/Common";
import bagroundimage from '../Images/login-bg.jpg'

function Profile() {
 
  const navigate = useNavigate();

  
  const handleLogout = () => {
    removeUserSession();
    navigate("/");
   
  };
  return (
    <>
    
     <section className="vh-100" style={{backgroundImage:`url(${bagroundimage})`}}>
      
      <div>
       <h5  className=" pt-5 text-white"> Welcome to Profile Page </h5>
        <br />
        <br />
        <button className="btn btn-info mt-4" onClick={handleLogout}>
          LogOut
        </button>
        <SessionExpire />
      </div>
      </section>
    </>
  );
}

export default Profile;
