import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

function CustomerPage() {
  return <h2>顧客候位畫面</h2>;
}

function StaffPage() {
  return <h2>店員操作畫面</h2>;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CustomerPage />} />
        <Route path="/staff" element={<StaffPage />} />
      </Routes>
    </Router>
  );
}

export default App;
