import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css';
import Home from "./components/Home";
import { GeneralContextProvider } from "./components/GeneralContext";

function App() {
  return (
    <>
    <BrowserRouter>
      <GeneralContextProvider>
        <Routes>
          <Route path='/*' element={<Home />} />
        </Routes>
      </GeneralContextProvider>
    </BrowserRouter>
    </>
  );
}

export default App
