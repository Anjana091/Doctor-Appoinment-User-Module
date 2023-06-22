import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import DoctorCard from "./components/DoctorCard";
import LoginForm from "./components/loginform";
import SignUpForm from "./components/signUpform";
import Home from "./components/Home";

function App() {


  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/signUp" element={<SignUpForm />} />
          <Route path="/home" element={<Home />} />
          <Route path="/doctors" element={<DoctorCard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

