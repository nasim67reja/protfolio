import { Fragment } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import MainHeader from "./components/Header/MainHeader";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import { Footer } from "./components/Footer/Footer";

export default function App() {
  return (
    <Fragment>
      <MainHeader />

      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/about" element={<p>This route is inot define yet</p>} />
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
      <Footer />
    </Fragment>
  );
}
