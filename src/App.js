import React from "react"
import Topbar from "./components/Topbar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Activities from "./components/Activities";
import Booking from "./components/Booking";

function App() {
  return (
    <div>
      <Topbar />
      <Navbar />
      <Hero />
      <Activities />
      <Booking />
    </div>
  );
}

export default App;
