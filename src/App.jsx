import React from "react";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <div>
      {/* <h1>Let's Build this App</h1> */}
      <NavBar />
      <main className="container">
        <Hero />
      </main>
    </div>
  );
};

export default App;
