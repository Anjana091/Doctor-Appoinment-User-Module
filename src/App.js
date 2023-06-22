import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import DoctorCard from "./components/DoctorCard";
import LoginForm from "./components/loginform";
import SignUpForm from "./components/signUpform";
import Home from "./components/Home";
import BookingPage from "./components/BookingPage";

function App() {


  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/signUp" element={<SignUpForm />} />
          <Route path="/home" element={<Home />} />
          <Route path="/doctors" element={<DoctorCard />} />
          <Route path="/doctors/book-appoinment/:doctorNo" element={<BookingPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

