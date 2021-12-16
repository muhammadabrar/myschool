
// import './bootstrap.min.css';
// import './cooltipz.css';

import Hero from './components/hero';
import Dashboard from './pages/dashboard';
import ExamDetail from './pages/Exam';


import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Staffs from './pages/staffs';
import Classess from './pages/Classes';
import Student_profile from './pages/student';
import Withdrawal from './pages/withdrawal';
import Admission from './pages/admission';
function App() {
  return (
  <>

  <Router>
  

    <Routes>

      <Route  path="/" element={<Hero />} >
      <Route  path="/" element={<Dashboard />} />
      <Route  path="/staff/:staffid" element={<Staffs />} />
      <Route  path="/student/:studentid" element={<Student_profile />} />
      <Route  path="/Withdrawalstudent" element={<Withdrawal />} />

      <Route   path="/classes" element={<Classess />} />
      <Route   path="/admission" element={<Admission />} />

      <Route  path="/exam/:examid" element={<ExamDetail />} />

      </Route>
      


      

    </Routes>
    <footer class="bg-light text-center  text-lg-start">
      <div class="text-center p-3" >
        © 2020 Copyright:
        <a class="text-dark" href="https://mdbootstrap.com/">MDBootstrap.com</a>
      </div>
    </footer>
  </Router>
</>
  );
}

export default App;
