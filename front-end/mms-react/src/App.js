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
import PrivateAdmin from "./components/PrivateAdmin";
import PrivateStudent from "./components/PrivateStudent";
import PrivateTeacher from "./components/PrivateTeacher";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route
          path="/admin-home"
          element={<PrivateAdmin children={<AdminHome />} />}
        />
        <Route
          path="/add-teacher"
          element={<PrivateAdmin children={<CreateTeacher />} />}
        />
        <Route
          path="/add-student"
          element={<PrivateAdmin children={<CreateStudent />} />}
        />
        <Route
          path="/show-teacher"
          element={<PrivateAdmin children={<ReadTeacher />} />}
        />
        <Route
          path="/show-student"
          element={<PrivateAdmin children={<ReadStudent />} />}
        />
        <Route
          path="/update-teacher"
          element={<PrivateAdmin children={<UpdateTeacher />} />}
        />
        <Route
          path="/update-student"
          element={<PrivateAdmin children={<UpdateStudent />} />}
        />
        <Route
          path="/update-student/:id"
          element={<PrivateAdmin children={<UpdateStudent />} />}
        />
        <Route
          path="/update-teacher/:id"
          element={<PrivateAdmin children={<UpdateTeacher />} />}
        />
        <Route path="/student-login" element={<StudentLogin />} />
        <Route path="/teacher-login" element={<TeacherLogin />} />
        <Route
          path="/student-home"
          element={<PrivateStudent children={<StudentHome />} />}
        />
        <Route
          path="/teacher-home"
          element={<PrivateTeacher children={<TeacherHome />} />}
        />
      </Routes>
    </div>
  );
}

export default App;
