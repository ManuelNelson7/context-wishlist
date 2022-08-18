import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Lista from "./pages/Lista";
import Crear from "./pages/Crear";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className="flex w-screen justify-center">
          <div className="mt-16 max-w-7xl w-11/12 mx-auto">
            <Routes>
              <Route path="/" element={<Lista />} />
              <Route path="crear" element={<Crear />} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
