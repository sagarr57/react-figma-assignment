import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import SelectProducts from "./components/SelectProducts";
import EditProducts from "./components/EditProducts";
import EditProductPage from "./components/EditProductPage";
import Schedule from "./components/SchedulePage";
import ScheduleConfirmation from "./components/ScheduleConfirmation";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/select-products" element={<SelectProducts />} />
        <Route path="/edit-products" element={<EditProducts />} />
        <Route path="/edit-product/:id" element={<EditProductPage />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route
          path="/schedule-confirmation"
          element={<ScheduleConfirmation />}
        />
      </Routes>
    </Router>
  );
}

export default App;
