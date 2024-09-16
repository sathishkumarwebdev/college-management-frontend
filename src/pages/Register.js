import { useState } from "react";
import {  useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const formData = {
    firstname: "",
    lastname: "",
    emailaddress: "",
    password: "",
    role: "",
  };
  const [userData, setUserData] = useState(formData);

  const handleOnChangeData = (e) => {
    setUserData((data) => ({ ...data, [e.target.name]: e.target.value }));
  };
  console.log(userData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { role, firstname, lastname, emailaddress, password } = userData;
      const body = { role, firstname, lastname, emailaddress, password };
      const res = await fetch("http://localhost:8080/user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      console.log(res.message);

      navigate("/login");
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <>
      <div className="create-acc-container">
        <div className="account-creation-container">
          <div className="account-creation-form">
            <div className="create-acc">
              <div className="section-part">
                <div>
                  {" "}
                  <h2>Create account.</h2>
                </div>
              </div>
            </div>

            <div className="input-form">
              <div className="radio-box">
                <div>
                  <input
                    type="radio"
                    name="role"
                    value="student"
                    onChange={handleOnChangeData}
                    checked
                  />{" "}
                  Student
                </div>
                <div>
                  {" "}
                  <input
                    type="radio"
                    name="role"
                    value="faculty"
                    onChange={handleOnChangeData}
                  />{" "}
                  faculty
                </div>
              </div>
              <div className="name-box">
                <div>
                  <input
                    type="text"
                    placeholder="First Name"
                    className="text-input"
                    name="firstname"
                    onChange={handleOnChangeData}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="lastname"
                    placeholder="Last Name"
                    className="text-input"
                    onChange={handleOnChangeData}
                  />
                </div>
              </div>
              <div className="general-input">
                <input
                  type="text"
                  name="emailaddress"
                  placeholder="email address"
                  className="text-input"
                  onChange={handleOnChangeData}
                />
              </div>
              <div className="general-input">
                <input
                  type="text"
                  name="password"
                  placeholder="Password"
                  className="text-input"
                  onChange={handleOnChangeData}
                />
              </div>

              <div className="register-btn">
                <button onClick={handleSubmit}>Register</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
