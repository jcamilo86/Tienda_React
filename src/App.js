import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import About from "./pages/About";
import Home from "./pages/Home";
import Default from "./pages/Default";
import Dashboard from "./pages/Dashboard";
import Formulario from "./Formulario/Form";
import Register from "./register/Register";
import 'bootstrap/dist/css/bootstrap.min.css'; 


function App() {
  return (
    <div className="App">
      <br></br> <br></br>
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/form" element={<Formulario/> }/>
        <Route path="/register" element={<Register/> }/>
        <Route path="/*" element={<Default/>}/>

        </Route>
      </Routes>
     
      
      
    </div>
  );
}

export default App;
