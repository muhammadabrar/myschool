
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
import Student_profile from './pages/student';
import Withdrawal from './pages/withdrawal';
import Admission from './pages/admission';
import { Progress } from './pages/progress';
import Finance from './pages/finance';
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
      <Route  path="/progress" element={<Progress />} />


      <Route   path="/admission" element={<Admission />} />

      <Route  path="/exam/:examid" element={<ExamDetail />} />
      <Route  path="/finance" element={<Finance />} />


      </Route>
      


      

    </Routes>
  </Router>
</>
  );
}

export default App;
