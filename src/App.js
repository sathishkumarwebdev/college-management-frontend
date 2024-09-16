import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register.js";
import Dashboard from "./pages/Dashboard.jsx";
import { UserLoginProvider } from "./provider/UserLoginProvider.jsx";

function App() {
  return (
    <>
      <UserLoginProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dasboard" element={<Dashboard />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </UserLoginProvider>
    </>
  );
}

export default App;
