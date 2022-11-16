import React,{useState} from 'react';
import "./App.css";
import Footer from "./components/footer/footer.jsx";
import Navb from "./components/Navbar/navbar";
import Contenedor from "./components/Contenedor/Contenedor";
import Login from "./components/Login/Login";
import Actividades from './Pages/Actividades';
import Rout from './components/Routes/Rout';

function App() {
  const [cliente, seCliente] = useState(false);
  return (
    <>
      {/* <Navb /> */}
      {cliente && (<Contenedor/>)}
      <Login/>  
      {/* <Actividades/> */}
      
      {/* <Sidebar /> */}
      {/* <Rout /> */}
      
      {/* <div className="vista">
   
      </div> */}

      {/*  <Footer />  */}
    </>
  );
}

export default App;
