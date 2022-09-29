import "./App.css";
import Sidebar from "./components/Sidebar";
import Footer from "./components/footer/footer.jsx";
import Navb from "./components/Navbar/navbar";
import Rout from "./components/Routes/Rout";
import Contenedor from "./components/Contenedor/Contenedor";

function App() {
  return (
    <>
      <Navb />
      <Contenedor/>
      {/* <Sidebar /> */}
      {/* <Rout /> */}
      
      {/* <div className="vista">
   
      </div> */}

      <Footer />
    </>
  );
}

export default App;
