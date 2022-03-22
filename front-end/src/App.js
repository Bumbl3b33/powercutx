import React from "react";
import ReactDOM from "react-dom";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/home/home";
import About from "./pages/about/about";
import Donate from "./pages/donate/donate";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/donate" element={<Donate />} />
    </Routes>
  );
}

// function App() {
//   return (
//     <>
//       <NavBar />
//       <Title />
//       <DistrictsProvider>
//         <Dashboard />
//       </DistrictsProvider>
//       <Footer />
//     </>
//   );
// }

export default App;
