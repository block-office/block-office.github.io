import "./App.css";
import { Home } from "./pages/home";

import { HashRouter, Routes, Route } from "react-router-dom";
import { Careers } from "./pages/careers";
import { Services } from "./pages/services";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="careers" element={<Careers />} />
        <Route path="services" element={<Services />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
