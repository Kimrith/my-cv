import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout/layout";
import Home from "./Navigation/home";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}></Route>
    </Routes>
  );
}
