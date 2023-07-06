import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Desktop/Homepage/Homepage";
import Crm from "./Pages/Desktop/Crm/Crm";
import Posp from "./Pages/Desktop/Posp/Posp";
import ErpProduct from "./Pages/Desktop/ErpProduct/ErpProduct";
import InsuranceAggregation from "./Pages/Desktop/InsuranceAggregation/InsuranceAggregation";
import AboutUs from "./Pages/Desktop/AboutUs/AboutUs";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/crm" element={<Crm />} />
          <Route path="/posp" element={<Posp />} />
          <Route path="/erp" element={<ErpProduct />} />
          <Route path="/ins" element={<InsuranceAggregation/>}/>
          <Route path="/aboutus" element={<AboutUs/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
