
import './App.css';
import Home from './Components/Home/Home';
import {  BrowserRouter as Router,Routes, Route } from "react-router-dom";
import StudentForm from './Components/student_form/StudentForm';
import SideNavbar from './Components/Dashboard/Sidenavbar';

function App() {
  return (
    <div >
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/student" element={<StudentForm />} />
          <Route path="/dashboard" element={<SideNavbar />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
