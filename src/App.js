import React from "react";
import TopBar from "./components/navbar/TopBar";
import Footer from "./components/navbar/Footer";
import Routes from "./components/routes";

function App() {
  return (
    <div>
      <TopBar />
      <Routes />
      <div className="fixed-bottom">
        <Footer />
      </div>
    </div>
  );
}

export default App;
