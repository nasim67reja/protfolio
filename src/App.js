import { Fragment } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import MainHeader from "./components/Header/MainHeader";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import { Footer } from "./components/Footer/Footer";
import ProjectPage from "./pages/ProjectPage";
import ProjectDetails from "./components/Project/ProjectDetails";
import AboutPage from "./pages/AboutPage";

export default function App() {
  return (
    <Fragment>
      <MainHeader />

      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project" element={<ProjectPage />} />

        <Route path="/about" element={<AboutPage />} />
        <Route path="/project/:projectTitle" element={<ProjectDetails />} />
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
      <Footer />
    </Fragment>
  );
}
