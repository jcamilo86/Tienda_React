import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import About from "./pages/About";
import Home from "./pages/Home";
import Default from "./pages/Default";
import Dashboard from "./pages/Dashboard";
import Formulario from "./Formulario/Frormulario";
import Usuarios from "./Backend/Usuarios";


function App() {
  return (
    <div className="App">
      <br></br> <br></br>
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/*" element={<Default/>}/>

        </Route>
      </Routes>
      <Usuarios/>
      <Formulario/>
    </div>
  );
}

export default App;
