import { useContext } from "react";
import { UserContext } from "../provider/UserLoginProvider";
import NavBar from "../components/NavBar";
import Students from "../pages/Students";
import Faculty from "../pages/Faculty";
import Admin from "./Admin";

export default function Dashboard() {
  const {user} = useContext(UserContext);
  console.log("::", user);
  const data1 = "student";

  return (
    <>
      <NavBar />
      <div>
        {data1 === "faculty" ? (
          <Faculty />
        ) : data1 === "student" ? (
          <Students />
        ) : (
          <Admin />
        )}
      </div>
    </>
  );
}
