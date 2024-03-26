import logo from "./logo.svg";
// import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NoteState from "./context/NoteState";
import Alert from "./components/Alert";
import Login1 from "./components/Login1";
import Signup from "./components/Signup";


function App() {
  return (
    <NoteState>
      <Router>
        <Navbar />
        <Alert message="PSK Technologies app" />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/login" element={<Login1/>} />
          <Route exact path="/signup" element={<Signup/>} />
          
        </Routes>
      </Router>
    </NoteState>
  );
}

export default App;
