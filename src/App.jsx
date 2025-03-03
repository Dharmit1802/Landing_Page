import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Herosection from "./Components/Herosection";
import Features from "./Components/Features";
import LatestWork from "./Components/LatestWork";
import Userreviews from "./Components/Userreviews";
import TeamDetails from "./Components/Teamdetails";
import IntegrationTech from "./Components/IntegrationTech";
import Homepage from "./Pages/Homepage";
import Footer from "./Components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="poppins-medium">
      <Navbar />
      <Homepage />
      <Footer />
    </div>
  );
}

export default App;
