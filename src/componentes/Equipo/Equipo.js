import "./Equipo.css"
import Colaborador from "../Colaborador/Colaborador"
import hexToRgba from 'hex-to-rgba';
const Equipo = (props) => {
    const {colorPrimario, titulo, id} = props.datos
    const {colaboradores, eliminarColaborador, actualizarColores, cambioFav} = props

    return <>
        {
        colaboradores.length > 0 && 
        <section className="equipo" style={{backgroundColor: hexToRgba(colorPrimario, 0.6)}}>
            <input 
                className="input-color"
                type='color'
                title="color"
                value={colorPrimario}
                onChange={(e) => {
                    actualizarColores(e.target.value, id)
                }}
            />
            <h3 style={{borderColor: colorPrimario}}>{titulo}</h3>
            <div className="colaborades">
                {
                        colaboradores.map((colaborador,index) => <Colaborador 
                        colorDeFondo={colorPrimario} 
                        datosColaboradores={colaborador} 
                        key={index}
                        cambioFav={cambioFav}
                        eliminarColaborador={eliminarColaborador}/>)
                }
            </div>
        </section> 
    }
    </>
        
}

export default Equipo