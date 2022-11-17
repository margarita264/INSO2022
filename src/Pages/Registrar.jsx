import React, {useState} from 'react';
import swal from 'sweetalert';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./styles.css";
import { Grid } from '@material-ui/core';

export const Registrar = () => {
  const [datos, setDatos] = useState({
      nombre:'',
      apellido: '',
      email:'',
      peso:'',
      telefono:'',
      membresia:'',
      patologia:'',
      actividadprevia:'',
      usuario:'',
      password:''
  })

  const handleInputChange = (event) => {
    // console.log(event.target.name)
    console.log(event.target.value)
    setDatos({
        ...datos,
        [event.target.name] : event.target.value
    })
  }
  
  const enviarDatos = (event) => {
    event.preventDefault()
    console.log('enviando datos...' + datos.nombre + ' ' + datos.apellido)
  }

  const mostrarAlerta=()=>{
    swal ({
      title: "Ingrese codigo de confirmacion:",
      content: "input",
      buttons: ["Cerrar", "Confirmar"],
    })
    .then((registro) => {
      if (registro) {
        swal("Usuario registrado correctamente", {
          icon: "success",
        });
      } else {
        swal("Cancelado", {timer:"500"})
      }
    });
   
  }
    return (
      <main style={{ display: 'block'}}>

      <form className="row" onSubmit={enviarDatos} >
      <h1>Registro Cliente</h1>
        <div className="col-md-3">
            <input 
            type="text" 
            placeholder="Nombre" 
            className="form-control" 
            onChange={handleInputChange} 
            name="nombre"></input>
        </div>
        <div className="col-md-3">
            <input 
            type="text" 
            placeholder="Apellido" 
            className="form-control" 
            onChange={handleInputChange} 
            name="apellido"></input>
        </div>
        <div className="col-md-3">
            <input 
            type="text" 
            placeholder="Email" 
            className="form-control" 
            onChange={handleInputChange} 
            name="email"></input>
        </div>
        <div className="col-md-3">
            <input 
            type="text" 
            placeholder="Peso" 
            className="form-control" 
            onChange={handleInputChange} 
            name="peso"></input>
        </div>
        <div className="col-md-3">
            <input 
            type="text" 
            placeholder="Telefono" 
            className="form-control" 
            onChange={handleInputChange} 
            name="telefono"></input>
        </div>
        <div className="col-md-3">
            <input 
            type="text" 
            placeholder="Membresia" 
            className="form-control" 
            onChange={handleInputChange} 
            name="membresia"></input>
        </div>
        <div className="col-md-3">
            <input 
            type="text" 
            placeholder="Patologia" 
            className="form-control" 
            onChange={handleInputChange} 
            name="patologia"></input>
        </div>
        <div className="col-md-3">
            <input 
            type="text" 
            placeholder="Actividad fisica previa" 
            className="form-control" 
            onChange={handleInputChange} 
            name="actividadprevia"></input>
        </div>
        <div className="col-md-3">
            <input 
            type="text" 
            placeholder="Usuario" 
            className="form-control" 
            onChange={handleInputChange} 
            name="usuario"
            ></input>
        </div>
        <div className="col-md-3">
            <input 
            type="text" 
            placeholder="Password" 
            className="form-control" 
            onChange={handleInputChange} 
            name="password"></input>
        </div>
        
      </form>

      <Grid style={{ alignItems: 'center', justifyContent: 'center', marginLeft: '30em'}}>
      <button onClick={()=> mostrarAlerta()} 
        type="submit" 
        className="btn btn-primary">Registrar</button>
      </Grid>
      </main>
  )
    
}

export default Registrar;