import NavBar from "../components/NavBar";
import { useContext } from "react";
import { UserContext } from "../provider/UserLoginProvider";

export default function Home() {
  const { user } = useContext(UserContext);
  console.log("::", user);

  return (
    <>
      <NavBar />
      <div className="home-container"></div>
    </>
  );
}
