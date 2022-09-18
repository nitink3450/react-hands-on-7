import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Contact from "./Components/Contact";
import { HomeCom } from "./Components/HomeCom";
import Students from "./Components/Students";
// import { useContext } from "react";
// import studentContext from "./contextAPI/StudentContext";
import UpdateForm from "./Pages/UpdateForm";
import {useStore} from "react-redux";

function App() {
  // const {student} = useContext(studentContext);
  
  
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomeCom />}></Route>
          <Route path="/students" element={<Students />}></Route>
          <Route path="/contactus" element={<Contact />}></Route>
          <Route path="/students/:idb" element={<UpdateForm />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
