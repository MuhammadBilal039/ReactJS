import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Help from "./Pages/Help";
import DetailContact from "./Pages/DetailContact";
import NestedAbout1 from "./Pages/NestedAbout1";
import NestedAbout2 from "./Pages/NestedAbout2";
import { Navigate } from "react-router-dom";

function App() {
  //  checking the navigation history
  console.log(window.history);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Nested Routing */}
        <Route path="/about" element={<About />}>
          <Route path="a1" element={<NestedAbout1 />} />
          <Route path="a2" element={<NestedAbout2 />} />
        </Route>
        <Route path="/contact" element={<Contact />} />
        {/* Dynamic Routing */}
        <Route path="/contact/:id" element={<DetailContact />} />
        {/* Redirecting Component - Navigate */}
        <Route path="/help" element={<Navigate to={"/"} replace />} />
      </Routes>
    </>
  );
}

export default App;
