import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Lista from "./pages/Lista";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className="flex w-screen justify-center">
          <div className="mt-16 max-w-7xl w-11/12 mx-auto">
            <Routes>
              <Route path="/" element={<Lista />} />

            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
