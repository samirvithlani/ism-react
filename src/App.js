import logo from "./logo.svg";
import "./App.css";
import "./styles.css";
import { Header } from "./components/Header";
import Footer from "./components/Footer";
import { Users } from "./components/Users";
import { RegisterUser } from "./components/RegisterUser";
import { EmployeeReg } from "./forms/EmployeeReg";
import { Navbar } from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { AboutUs } from "./pages/AboutUs";
import { ContactUs } from "./pages/ContactUs";
import { ContactDetaill } from "./pages/ContactDetaill";
import { TutorialList } from "./api/TutorialList";
import { AddTutorial } from "./api/AddTutorial";
import { TutorialDetail } from "./api/TutorialDetail";
import { TutorialUpdate } from "./api/TutorialUpdate";
import { LoginUser } from "./components/LoginUser";
import ProtectedRoutes from "./components/ProtectedRoutes";
import { Sidebar } from "./components/Sidebar";
import { Data } from "./context/Data";

function App() {
  //var title = "USER APP"

  return (
    <div className="App">
      <Data />

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/contactdetail/:id/" element={<ContactDetaill />} />
          <Route path="/tutoriallist" element={<TutorialList />}></Route>
          <Route path="/addtutorial" element={<AddTutorial />}></Route>
          <Route
            path="/tutorialdetail/:id"
            element={<TutorialDetail />}
          ></Route>
          <Route
            path="/tutorialupdate/:id"
            element={<TutorialUpdate />}
          ></Route>
        </Route>
        <Route path="/login" element={<LoginUser />}></Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
