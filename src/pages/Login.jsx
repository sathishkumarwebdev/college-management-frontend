import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RotatingLines } from "react-loader-spinner";
export default function Login() {
  const formData = {
    emailaddress: "",
    password: "",
  };

  const [trigger, setTrigger] = useState(false);
  const [loadder, setLodder] = useState(false);
  const [loginData, SetLoginData] = useState(formData);
  const navigate = useNavigate();

  console.log(trigger);

  const handleLogin = (e) => {
    SetLoginData((data) => ({ ...data, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTrigger(true);
    setLodder(true);
    const { emailaddress, password } = loginData;
    const body = { emailaddress, password };
    const res = await fetch(
      "https://careerconnect-server-zcqh.onrender.com/user/login",
      {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    const data = await res.json();

    if (data.userLogin) {
      setLodder(false);
      const { userLogin } = data;
      console.log(data.message);

      navigate("/");

      console.log(data.userLogin);
    } else {
      console.log(data.message);
    }
    setTrigger(false);
    setLodder(false);
    try {
    } catch (err) {
      console.error(err.message);
    }
  };

  if (loadder) {
    return (
      <div className="loader">
        <RotatingLines
          visible={true}
          height="96"
          width="96"
          color="#faf3da"
          strokeWidth="5"
          strokeColor="#fdc600"
          animationDuration="0.75"
          ariaLabel="rotating-lines-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    );
  }

  return (
    <div className="create-acc-container">
      <div className="account-creation-container">
        <div className="account-creation-form">
          <div className="create-acc">
            <div className="section-part">
              <div>
                {" "}
                <h2>Login</h2>
                <Link to={"/register"}>
                  <p>
                    Don't have account?&nbsp;
                    <span className="blue-italic">Create account</span>{" "}
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
                onChange={handleLogin}
                required
              />
            </div>
            <div className="general-input">
              <input
                type="password"
                placeholder="Password"
                className="text-input"
                name="password"
                onChange={handleLogin}
              />
            </div>

            <div className="register-btn">
              <button onClick={handleSubmit} disabled={trigger}>
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
