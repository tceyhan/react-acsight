import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Login from "./Login";
import Register from "./Register";
import AddProvider from "./AddProvider";
import UpdateProvider from "./UpdateProvider";
import Notfound from "./Notfound";
import DataList from "./DataList";


const AppRouter = () => {
  return (
    <Router>      
      <Navbar />
      <Routes>
        <Route path="/" element={<DataList />} />    
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />   
        <Route path="/add" element={<AddProvider />} />       
        <Route path="/update" element={<UpdateProvider/>} />       
        <Route path="*" element={<Notfound />} />
      </Routes>
    </Router>
  );
};
export default AppRouter;