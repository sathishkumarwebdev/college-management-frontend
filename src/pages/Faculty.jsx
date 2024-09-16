import React ,{useState}from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import AdddStudentMark from "../components/AdddStudentMark";
import WelcomeTemplate from "../components/WelcomeTemplate";
export default function Faculty() {

  const [menuSelect,setMenuSelect] = useState('welcome')

  return (
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
          <SubMenu label="Menu">
            <MenuItem onClick={()=>setMenuSelect("addMark")}> Add Student Mark </MenuItem>
            <MenuItem onClick={()=>setMenuSelect('updateMark')}> Profile Update </MenuItem>
          </SubMenu>
        </Menu>
      </Sidebar>
      <div>
        {menuSelect === 'addMark'?<AdddStudentMark/ > : menuSelect === 'updateMark'?"update mark":<WelcomeTemplate/> }
      </div>
    </div>
  );
}
