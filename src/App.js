import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import DoctorCard from "./components/DoctorCard";
import LoginForm from "./components/loginform";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/doctors" element={<DoctorCard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
