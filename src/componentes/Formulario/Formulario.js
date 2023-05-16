import { useState } from "react"
import "./Formulario.css"
import Campo from "../Campo"
import ListaOpciones from "../ListaOpciones"
import Boton from "../Boton"
const Formulario = (props) => {

    const [nombre, setNombre] = useState("")
    const [puesto, setPuesto] = useState("")
    const [foto, setFoto] = useState("")
    const [equipo, setEquipo] = useState("")

    const [titulo, setTitulo] = useState("");
    const [color, setColor] = useState("");

    const {registrarColaborador, nuevoEquipo} = props

    const manejarEnvio = (e) => {
        e.preventDefault();
        let datosAEnviar = {
            nombre: nombre,
            puesto: puesto,
            foto: foto,
            equipo: equipo
        }
        registrarColaborador(datosAEnviar);

        setNombre("");
        setPuesto("");
        setFoto("");
        setEquipo("");
    }

    const manejarEnvioDeEquipo = (e) =>{
        e.preventDefault();
        nuevoEquipo({titulo, colorPrimario: color})
        setColor("");
        setTitulo("")
    }
    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador</h2>
            <Campo title="Nombre" placeholder="Ingresar nombre" required valor={nombre} actualizarValor={setNombre} />
            <Campo title="Puesto" placeholder="Ingresar puesto" required valor={puesto} actualizarValor={setPuesto}/>
            <Campo title="Foto" placeholder="Ingresar enlace de foto" required valor={foto} actualizarValor={setFoto}/>
            <ListaOpciones valor={equipo} actualizarValor={setEquipo} datos={props.equipos}/>
            <Boton title= "Crear" />
        </form>
        <form onSubmit={manejarEnvioDeEquipo}>
            <h2>Rellena el formulario para crear nuevo equipo</h2>
            <Campo title="Equipo" placeholder="Ingresar nombre del equipo" required valor={titulo} actualizarValor={setTitulo} />
            <Campo title="Color" placeholder="Ingresar color en HEX" required valor={color} actualizarValor={setColor} type="color"/>
            <Boton title= "Crear equipo" />
        </form>
    </section>
}

export default Formulario