import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MB20 from "./pages/fingerprint/Mb20";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/mb20" element={<MB20 />} />
    </Routes>
  );
}