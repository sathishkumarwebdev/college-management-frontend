import React, { useState } from "react";
import StudentForm from "../components/StudentForm";
import FacultyForm from "../components/FacultyForm";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import StudentUpdate from "../components/StudentUpdate";
import StudentDelete from "../components/StudentDelete";
import FacultyUpdate from "../components/FacultyUpdate";
import FacultyDelete from "../components/FacultyDelete";
import WelcomeTemplate from "../components/WelcomeTemplate";

export default function Admin() {
  const [choice, setChoice] = useState("");

  return (
    <>
      <div
        style={{
          display: "flex",
          height: "100%",
          minHeight: "100vh",
          justifyContent: "left",
        }}
      >
        <Sidebar backgroundColor="#fff">
          <Menu>
            <SubMenu label="Student">
              <MenuItem onClick={() => setChoice("AddStudent")}>
                {" "}
                Add Student{" "}
              </MenuItem>
              <MenuItem onClick={() => setChoice("UpdateStudent")}>
                {" "}
                Update Student{" "}
              </MenuItem>
              <MenuItem onClick={() => setChoice("DeleteStudent")}>
                {" "}
                Delete Student{" "}
              </MenuItem>
            </SubMenu>
            <SubMenu label="Faculty">
              <MenuItem onClick={() => setChoice("AddFaculty")}>
                {" "}
                Add Faculty{" "}
              </MenuItem>
              <MenuItem onClick={() => setChoice("UpdateFaculty")}>
                {" "}
                Update Faculty{" "}
              </MenuItem>
              <MenuItem onClick={() => setChoice("DeleteFaculty")}>
                {" "}
                Delete Faculty{" "}
              </MenuItem>
            </SubMenu>
          </Menu>
        </Sidebar>
        <div className="admin-main">
          {choice === "AddStudent" ? (
            <StudentForm />
          ) : choice === "UpdateStudent" ? (
            <StudentUpdate />
          ) : choice === "DeleteStudent" ? (
            <StudentDelete />
          ) : choice === "AddFaculty" ? (
            <FacultyForm />
          ) : choice === "UpdateFaculty" ? (
            <FacultyUpdate />
          ) : choice === "DeleteFaculty" ? (
            <FacultyDelete />
          ) : (
            <WelcomeTemplate />
          )}
        </div>
      </div>
    </>
  );
}
