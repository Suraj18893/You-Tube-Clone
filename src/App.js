import React, { useState } from "react";
import Header from "./Components/header/Header";
import Sidebar from "./Components/sidebar/Sidebar";
import HomeScreen from "./screens/homeScreen/HomeScreen";
import { Container } from "react-bootstrap";
import "./_app.scss";
import LoginScreen from "./screens/loginScreen/LoginScreen";

const App = () => {
  const [sidebar, toggleSidebar] = useState(false);
  const handleToggleSidebar = () => toggleSidebar((value) => !value);
  return (
    <div>
      <Header handleToggleSidebar={handleToggleSidebar} />
      <div className="app__container">
        <Sidebar sidebar={sidebar} handleToggleSidebar={handleToggleSidebar} />
        <Container fluid className="app__main">
          <HomeScreen />
        </Container>
      </div>
    </div>
    // <LoginScreen/>
  );
};

export default App;
