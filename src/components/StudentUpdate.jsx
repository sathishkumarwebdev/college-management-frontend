import React from "react";

export default function StudentUpdate() {
  return (
    <>
      <div className="student-form">
        <div className="the-form">
          <div className="input-form">
            <h2 style={{ color: "blue" }}>Update Student Information </h2>{" "}
            <br />
            <div className="name-box">
              <div>
                <input
                  type="text"
                  placeholder="First Name"
                  className="text-input"
                  name="firstname"
                  //   onChange={handleOnChangeData}
                />
              </div>
              <div>
                <input
                  type="text"
                  name="lastname"
                  placeholder="Last Name"
                  className="text-input"
                  //   onChange={handleOnChangeData}
                />
              </div>
            </div>
            <div className="general-input">
              <input
                type="text"
                placeholder="Email Address"
                className="text-input"
                name="emailaddress"
                //   onChange={(e) => setEmailaddress(e.target.value)}
                required
              />
            </div>
            <div className="general-input">
              <input
                type="password"
                placeholder="Password"
                className="text-input"
                name="password"
              />
            </div>
            <div className="general-input">
              <input
                type="text"
                placeholder="Register Number"
                className="text-input"
                name="password"
              />
            </div>
            <div className="general-input">
              <input
                type="select"
                placeholder="Register Number"
                className="text-input"
                name="password"
              />
            </div>
            <div className="radio-box">
              <div>
                <input
                  type="radio"
                  name="role"
                  value="class A"
                  //   onChange={handleOnChangeData}
                  checked
                />{" "}
                Class A
              </div>
              <div>
                {" "}
                <input
                  type="radio"
                  name="Class B"
                  value="class B"
                  //   onChange={handleOnChangeData}
                />{" "}
                Class B
              </div>
              <div>
                {" "}
                <input
                  type="radio"
                  name="Class C"
                  value="class C"
                  //   onChange={handleOnChangeData}
                />{" "}
                Class c
              </div>
            </div>
            <div className="register-btn">
              <button>Update Student</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
