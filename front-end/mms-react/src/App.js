import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home.";
import StudentLogin from "./components/StudentLogin";
import AdminLogin from "./components/AdminLogin";
import TeacherLogin from "./components/TeacherLogin";
import AdminHome from "./components/AdminHome";
import StudentHome from "./components/StudentHome";
import TeacherHome from "./components/TeacherHome";
import CreateTeacher from "./components/create/CreateTeacher";
import CreateStudent from "./components/create/CreateStudent";
import ReadTeacher from "./components/read/ReadTeacher";
import ReadStudent from "./components/read/ReadStudent";
import UpdateTeacher from "./components/update/UpdateTeacher";
import UpdateStudent from "./components/update/UpdateStudent";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/student-login" element={<StudentLogin />} />
        <Route path="/teacher-login" element={<TeacherLogin />} />
        <Route path="/admin-home" element={<AdminHome />} />
        <Route path="/student-home" element={<StudentHome />} />
        <Route path="/teacher-home" element={<TeacherHome />} />
        <Route path="/add-teacher" element={<CreateTeacher />} />
        <Route path="/add-student" element={<CreateStudent />} />
        <Route path="/show-teacher" element={<ReadTeacher />} />
        <Route path="/show-student" element={<ReadStudent />} />
        <Route path="/update-teacher" element={<UpdateTeacher />} />
        <Route path="/update-student" element={<UpdateStudent />} />
        <Route path="/update-student/:id" element={<UpdateStudent />} />
        <Route path="/update-teacher/:id" element={<UpdateTeacher />} />
        <Route path="/student-home" element={<StudentHome />} />
        <Route path="/teacher-home" element={<TeacherHome />} />
      </Routes>
    </div>
  );
}

export default App;
