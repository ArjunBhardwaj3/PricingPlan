import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PricingPlan from './PricingPlan';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PricingPlan />} />
      </Routes>
    </Router>
  );
}

export default App;
