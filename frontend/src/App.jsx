/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "prismjs/themes/prism-tomorrow.css";
import prism from "prismjs";
import "highlight.js/styles/atom-one-dark.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Home from "./components/HomePage";

function App() {
  useEffect(() => {
    prism.highlightAll();
  }, []);

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-900 text-white p-6 gap-6">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
