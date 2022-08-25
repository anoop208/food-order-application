import React from "react";
import { BrowserRouter as Router, Route,Routes} from "react-router-dom";
import Home from "./pages/HomePage";
import OrderPage from "./pages/OrderPage";
import './index.css'
import PaymentPage from "./pages/PaymentPage";

function App() {
  return (
    <div className="container">
      <Router>
        <Routes>
           <Route  path="/" element={<Home/>}/>
           <Route  path="/OrderPage" element={<OrderPage/>}/>
           <Route path="/PaymentPage" element={<PaymentPage/>}/>
        </Routes>
      </Router>
  </div>
  );
}

export default App;
