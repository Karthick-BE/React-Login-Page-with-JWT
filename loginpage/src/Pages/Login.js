import React, { useState } from "react";
import "react-bootstrap";
import { setUserSession } from "../Routes/Common";
import { Container, Row } from "react-bootstrap";
import bagroundimage from "../Images/login-bg.jpg";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const [name, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const AddData = () => {
    if (name.trim().length !== 0) {
      setError(null);
      setLoading(true);
      axios
        .post(` https://2689-103-141-51-42.in.ngrok.io/api/v1/login`, {
          email: email,
          password: password,
        })
        .then((response) => {
          setLoading(false);
          setUserSession(response.data.token, response.data.refreshtoken);
          navigate("/Profile");
        })
        .catch((error) => {
          setLoading(false);
          if (error.response === 401) {
            setError(error.response.data.status);
          } else setError("Something went wrong. Please try again later.");
        });
    } else {
      alert("Enter a Value");
    }
  };
  const DeleteData = () => {
    setUserName("");
    setEmail("");
    setPassword("");
  };
  return (
    <section
      className="vh-100"
      style={{
        backgroundImage: `url(${bagroundimage})`,
        backgroundPosition: "center",
      }}
    >
      <Container>
        <div className="row py-5">
          <div className="col-sm-4"></div>

          <div className="col-sm-4">
            <div
              className="card cardstyle text-white  mt-5"
              style={{ borderRadius: "0.7rem" }}
            >
              <Container>
                <div className="mt-5 text-center">
                  {" "}
                  <h3>Login Page</h3>{" "}
                </div>
                <Row>
                  <h6 className="p-0 ">
                    <label className=" d-flex">User Name *</label>
                  </h6>
                  <input
                    type="text"
                    placeholder="Enter an UserName"
                    value={name}
                    className="form-control w-100 "
                    onChange={(e) => setUserName(e.target.value)}
                  ></input>
                </Row>
                <Row>
                  <h6 className="p-0">
                    <label className="d-flex mt-2">Email address *</label>
                  </h6>
                  <input
                    type="text"
                    placeholder="Enter an Email"
                    value={email}
                    className="form-control w-100 "
                    onChange={(e) => setEmail(e.target.value)}
                  ></input>
                </Row>
                <Row>
                  <h6 className="p-0">
                    <label className="d-flex mt-2">Password *</label>
                  </h6>
                  <input
                    type="password"
                    placeholder="Enter a Password"
                    value={password}
                    className="form-control w-100 "
                    onChange={(e) => setPassword(e.target.value)}
                  ></input>
                </Row>
                <br />
                {error && (
                  <>
                    <small
                      style={{
                        color: "red",
                        fontSize: "13px",
                        fontWeight: "bold",
                      }}
                    >
                      {error}
                    </small>
                    <br />
                  </>
                )}
                <br />

                <button
                  className="btn btn-primary"
                  value={loading ? "Loading..." : "Login"}
                  onClick={AddData}
                  disabled={loading}
                >
                  Sign In
                </button>
                <button className="btn btn-danger m-2" onClick={DeleteData}>
                  Cancel
                </button>
                <br />
                <br />
                <br />
              </Container>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Login;
