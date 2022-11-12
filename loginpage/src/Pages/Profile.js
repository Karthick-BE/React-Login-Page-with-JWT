import React, { useState } from "react";
import "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { SessionExpire } from "../Routes/SessionExpire";
import { removeUserSession, getToken, getRefreshToken } from "../Routes/Common";
import bagroundimage from "../Images/login-bg.jpg";
import axios from "axios";
import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";

function Profile() {
  const navigate = useNavigate();
  const [value, setValue] = useState("");
  const token = getToken();
  const refresh = getRefreshToken();
  const body = {
    student_admissions_id: 1013,
  };
  const handleLogout = () => {
    removeUserSession();
    navigate("/");
  };
  const getData = () => {
    const api = "https://2689-103-141-51-42.in.ngrok.io/api/v1/studentProfile";
    axios
      .post(api, body, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setValue(response.data.data[0]);
      });
  };
  useEffect(() => {
    setTimeout(() => {
      axios

        .post("https://2689-103-141-51-42.in.ngrok.io/api/v1/login", {
          refreshtoken: refresh,
        })
        .then((response) => {
          sessionStorage.setItem("token", response.data.accesstoken);
          sessionStorage.setItem("refreshtoken", response.data.refreshtoken);
        })
        .catch((err) => {
          console.log("error", err);
          navigate("/");
        });
    }, 59000);
    // eslint-disable-next-line
  }, []);
  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <section
        className=""
        style={{
          backgroundImage: `url(${bagroundimage})`,
          minHeight: "100vh",
          backgroundSize: "cover",
        }}
      >
        <h5 className=" pt-5 text-white text-center">
          {" "}
          Student Information Page{" "}
        </h5>
        <Row>
          <Col></Col>
          <Col></Col>
          <Col></Col>
          <Col></Col>
          <Col></Col>
          <Col>
            <button className="btn btn-info mt-4 " onClick={handleLogout}>
              LogOut
            </button>
          </Col>
        </Row>
        <br />
        <br />
        <div className="table-responsive">
          <table className="table table-about ">
            <thead className="table-dark text-center">
              <tr>
                <th>TITLE</th>
                <th>DETAILS</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-white text-center">student_name</td>
                <td className="text-white text-center">{value.student_name}</td>
              </tr>
              <tr>
                <td className="text-white text-center">gender</td>
                <td className="text-white text-center">{value.gender}</td>
              </tr>
              <tr>
                <td className="text-white text-center">email</td>
                <td className="text-white text-center">{value.email}</td>
              </tr>
              <tr>
                <td className="text-white text-center">admission_date</td>
                <td className="text-white text-center">
                  {value.admission_date}
                </td>
              </tr>
              <tr>
                <td className="text-white text-center">previous_school_info</td>

                <td className="text-white text-center">
                  {value.previous_school_info}
                </td>
              </tr>
              <tr>
                <td className="text-white text-center">father_name</td>
                <td className="text-white text-center">{value.father_name}</td>
              </tr>
              <tr>
                <td className="text-white text-center">father_occupation</td>
                <td className="text-white text-center">
                  {value.father_occupation}
                </td>
              </tr>
              <tr>
                <td className="text-white text-center">address</td>
                <td className="text-white text-center">{value.address}</td>
              </tr>
              <tr>
                <td className="text-white text-center">phone_number</td>

                <td className="text-white text-center">{value.phone_number}</td>
              </tr>
              <tr>
                <td className="text-white text-center">alt_phone_number</td>
                <td className="text-white text-center">
                  {value.alt_phone_number}
                </td>
              </tr>
              <tr>
                <td className="text-white text-center">alt_phone_number</td>
                <td className="text-white text-center">
                  {value.alt_phone_number}
                </td>
              </tr>
              <tr>
                <td className="text-white text-center">stu_code</td>
                <td className="text-white text-center">{value.stu_code}</td>
              </tr>
              <tr>
                <td className="text-white text-center">status</td>
                <td className="text-white text-center">{value.status}</td>
              </tr>
              <tr>
                <td className="text-white text-center">admission_no</td>
                <td className="text-white text-center">{value.admission_no}</td>
              </tr>
              <tr>
                <td className="text-white text-center">from_grade</td>
                <td className="text-white text-center">{value.from_grade}</td>
              </tr>
              <tr>
                <td className="text-white text-center">
                  student_allocation_id
                </td>
                <td className="text-white text-center">
                  {value.student_allocation_id}
                </td>
              </tr>
              <tr>
                <td className="text-white text-center">grade_id</td>
                <td className="text-white text-center">{value.grade_id}</td>
              </tr>
              <tr>
                <td className="text-white text-center">created_at</td>
                <td className="text-white text-center">{value.created_at}</td>
              </tr>
              <tr>
                <td className="text-white text-center">updated_at</td>
                <td className="text-white text-center">{value.updated_at}</td>
              </tr>
              <tr>
                <td className="text-white text-center">
                  student_admissions_id
                </td>
                <td className="text-white text-center">
                  {value.student_admissions_id}
                </td>
              </tr>
              <tr>
                <td className="text-white text-center">student_id</td>
                <td className="text-white text-center">{value.student_id}</td>
              </tr>
              <tr>
                <td className="text-white text-center">grade_section_id</td>
                <td className="text-white text-center">
                  {value.grade_section_id}
                </td>
              </tr>
              <tr>
                <td className="text-white text-center">year_id</td>
                <td className="text-white text-center">{value.year_id}</td>
              </tr>
              <tr>
                <td className="text-white text-center">mode_of_transport</td>
                <td className="text-white text-center">
                  {value.mode_of_transport}
                </td>
              </tr>
              <tr>
                <td className="text-white text-center">
                  mode_of_transport_allocation
                </td>
                <td className="text-white text-center">
                  {value.mode_of_transport_allocation}
                </td>
              </tr>
              <tr>
                <td className="text-white text-center">
                  mode_of_transport_touched
                </td>
                <td className="text-white text-center">
                  {value.mode_of_transport_touched}
                </td>
              </tr>
              <tr>
                <td className="text-white text-center">grade_master</td>
                <td className="text-white text-center">{value.grade_master}</td>
              </tr>
              <tr>
                <td className="text-white text-center">grade_master_id</td>
                <td className="text-white text-center">
                  {value.grade_master_id}
                </td>
              </tr>
              <tr>
                <td className="text-white text-center">description</td>
                <td className="text-white text-center">{value.description}</td>
              </tr>
              <tr>
                <td className="text-white text-center">description</td>
                <td className="text-white text-center">{value.description}</td>
              </tr>
              <tr>
                <td className="text-white text-center">section</td>
                <td className="text-white text-center">{value.section}</td>
              </tr>
              <tr>
                <td className="text-white text-center">academic_year_id</td>
                <td className="text-white text-center">
                  {value.academic_year_id}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <SessionExpire />
      </section>
    </>
  );
}

export default Profile;
