import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../provider/UserLoginProvider";

import axios from "axios";

export default function Login() {
  // const context = useContext(UserContext);
  const { login } = useContext(UserContext);
  // const { setUserData, userData } = context;
  const [emailaddress, setEmailaddress] = useState("");
  const [password, setPassword] = useState("");
  // const [error, setError] = useState("");
  const navigate = useNavigate();

  // console.log(emailaddress,password);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const status = await login(emailaddress, password);

    if (status) {
      navigate("/");
    }
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await axios.post("http://localhost:5000/users/login", {
  //       emailaddress,
  //       password,
  //     });

  //     const { userLogin } = await response.data;
  //     if (userLogin) {
  //       setUserData(userLogin);
  //       console.log(userData);

  //       navigate("/");
  //     } else {
  //       setError("Login failed. Please check your credentials.");
  //     }
  //   } catch (err) {
  //     console.error(
  //       "Login error:",
  //       err.response ? err.response.data : err.message
  //     );
  //     setError("Login failed. Please check your credentials.");
  //   }
  // };

  return (
    <div className="create-acc-container">
      <div className="account-creation-container">
        <div className="account-creation-form">
          <div className="create-acc">
            <div className="section-part">
              <div>
                <h2>Login</h2>
                <Link to={"/register"}>
                  <p>
                    Don't have an account?&nbsp;
                    <span className="blue-italic">Create account</span>
                  </p>
                </Link>
              </div>
            </div>
          </div>

          <div className="input-form">
            <div className="general-input">
              <input
                type="text"
                placeholder="Email Address"
                className="text-input"
                name="emailaddress"
                onChange={(e) => setEmailaddress(e.target.value)}
                required
              />
            </div>
            <div className="general-input">
              <input
                type="password"
                placeholder="Password"
                className="text-input"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {/* {error && <p className="error-message">{error}</p>}{" "} */}
            {/* Display error message */}
            <div className="register-btn">
              <button onClick={handleSubmit}>Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
