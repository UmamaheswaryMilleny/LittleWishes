import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Gifts from "./pages/Gifts";
import ProtectedGiftsRoute from "./components/ProtectedGiftsRoute";

export default function App() {
  
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* <Route path="/gifts" element={<Gifts />} /> */}
          {/* 🔐 PROTECTED GIFTS ROUTE */}
  <Route
    path="/gifts"
    element={
      <ProtectedGiftsRoute>
        <Gifts />
      </ProtectedGiftsRoute>
    }
  />
      </Routes>
    </BrowserRouter>
  );
}
