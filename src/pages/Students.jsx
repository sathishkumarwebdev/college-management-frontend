import React from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";

export default function Students() {
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
          <SubMenu label="Student">
            <MenuItem> View Mark </MenuItem>
            <MenuItem> Profile Update </MenuItem>
          </SubMenu>
        </Menu>
      </Sidebar>
    </div>
  );
}
