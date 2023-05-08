import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import Header from './componentes/Header/Header.js';
import Formulario from './componentes/Formulario/Formulario';
import MiOrg from './componentes/MiOrg';
import Equipo from './componentes/Equipo/Equipo';
import Footer from './componentes/Footer/Footer';
function App() {
  const [mostrarFormulario, actuazlizarMostrar] = useState(true);
  const [colaboradores, actualizarColaboradores] = useState([{
    id: uuidv4(),
    equipo:"Front End",
    foto:"https://github.com/JorgeGVH7.png",
    nombre:"Jorge Garibay",
    puesto:"Programador",
    fav: false
    },
    {
      id: uuidv4(),
      equipo:"Programación",
      foto:"https://github.com/JorgeGVH7.png",
      nombre:"Jorge Garibay2",
      puesto:"Programador",
      fav: true
      },
      {
        id: uuidv4(),
        equipo:"Front End",
        foto:"https://github.com/JorgeGVH7.png",
        nombre:"Jorge Garibay3",
        puesto:"Programador",
        fav: false
        },
        {
          id: uuidv4(),
          equipo:"Data Science",
          foto:"https://github.com/JorgeGVH7.png",
          nombre:"Jorge Garibay4",
          puesto:"Programador",
          fav:false
          },
          {
            id: uuidv4(),
            equipo:"UX y Diseño",
            foto:"https://github.com/JorgeGVH7.png",
            nombre:"Jorge Garibay5",
            puesto:"Programador",
            fav: false
            },
            {
              id: uuidv4(),
              equipo:"UX y Diseño",
              foto:"https://github.com/JorgeGVH7.png",
              nombre:"Jorge Garibay6",
              puesto:"Programador",
              fav: false
              }
  ]);
  const [equipos, actualizarEquipos] = useState([{
      id: uuidv4(),
      titulo:"Programación",
      colorPrimario:"#57C278",
      colorSecundario:"#D9F7E9"
    },
    {
      id: uuidv4(),
      titulo:"Front End",
      colorPrimario:"#82CFFA",
      colorSecundario:"#E8F8FF"
    },
    {
      id: uuidv4(),
      titulo:"Data Science",
      colorPrimario:"#A6D157",
      colorSecundario:"#F0F8E2"
    },
    {
      id: uuidv4(),
      titulo:"Devops",
      colorPrimario:"#E06B69",
      colorSecundario:"#FDE7E8"
    },
    {
      id: uuidv4(),
      titulo:"UX y Diseño",
      colorPrimario:"#DB6EBF",
      colorSecundario:"#FAE9F5"
    },
    {
      id: uuidv4(),
      titulo:"Móvil",
      colorPrimario:"#FFBA05",
      colorSecundario:"#FFF5D9"
    },
    {
      id: uuidv4(),
      titulo:"Innovación y  Gestión",
      colorPrimario:"#FF8A29",
      colorSecundario:"#FFEEDF"
    }]);
  
  //Temario --> condicion? seMuestra : noSeMuestra
  
  const cambiarMostrar = () => {
    actuazlizarMostrar(!mostrarFormulario);
  }

  //Registrar colaborador
  const registrarColaborador = (colaborador) =>{
    //Spread operator
    actualizarColaboradores([...colaboradores, colaborador])
  }

  //Eliminar Colaborador
  const eliminarColaborador = (id) => {
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
    actualizarColaboradores(nuevosColaboradores)
  }

  //Actualizar Color
  const actualizarColores= (color,id) =>{
      const equiposActualizados = equipos.map((equipo) => {
          if(equipo.id === id){
            equipo.colorPrimario = color
          }
          return equipo
      })
      actualizarEquipos(equiposActualizados)
  }

  const nuevoEquipo = (equipo) => {
      actualizarEquipos([...equipos, {...equipo, id:uuidv4()}])
  }

  //Cambio de fav

  const cambioFav = (id) =>{
    const colaboradoresActualizados = colaboradores.map((colaborador)=>{
      if(colaborador.id === id){
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })
    actualizarColaboradores(colaboradoresActualizados)
  }

  return (
    <div>
      <Header />
      { mostrarFormulario === true ?  <Formulario nuevoEquipo = {nuevoEquipo} registrarColaborador={registrarColaborador} equipos={equipos.map((equipo) => equipo.titulo)}/> : <></>}
      <MiOrg cambiar={cambiarMostrar}/>
      {
        equipos.map((equipos) => {
          return <Equipo 
          key={equipos.titulo} 
          datos={equipos} 
          eliminarColaborador ={eliminarColaborador}
          colaboradores={colaboradores.filter((colaborador) => colaborador.equipo === equipos.titulo)}
          actualizarColores={actualizarColores}
          cambioFav={cambioFav}
          />
        })
      }
      <Footer />
    </div>
  );
}

export default App;
