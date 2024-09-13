import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const formData = {
    firstname: "",
    lastname: "",
    username: "",
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
    const { firstname, lastname, username, password } = userData;
    const body = { firstname, lastname, username, password };
    const res = await fetch("http://localhost:8082/account", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    navigate("/login");
    try {
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
                  <Link to={"/login"}>
                    <p>
                      Already have account? &nbsp;
                      <span className="blue-italic">Log In</span>{" "}
                    </p>
                  </Link>
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
                  name="username"
                  placeholder="User Name"
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
