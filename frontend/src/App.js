
import { Routes, Route } from "react-router-dom"
import Login from "./Components/Admin/Login";
import Home from "./Components/Admin/Home";
import Dashboard from "./Components/Admin/Dashboard";
import AllProduct from "./Components/AllProduct";

function App() {
  return (
    <div className="">
        <Routes>
        <Route path="/" element={ <Home/> } /> 
        <Route path="/All" element={ <AllProduct/> } />
        <Route path="login" element={ <Login/> } />
        <Route path="dashboard" element={ <Dashboard/> } />
      
      </Routes>
    </div>
  );
}

export default App;
