import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";

import MainHeader from "./components/Header/MainHeader";
import Home from "./pages/Home";

export default function App() {
  return (
    <Fragment>
      <MainHeader></MainHeader>
      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
    </Fragment>
  );
}
