import "./Colaborador.css"
import { AiFillCloseCircle, AiOutlineHeart, AiFillHeart } from "react-icons/ai"

const Colaborador = (props) => {
    const {nombre, puesto, foto, id, fav} = props.datosColaboradores
    const {colorDeFondo, eliminarColaborador, cambioFav} = props
    return <div className="colaborador" >

        <AiFillCloseCircle className="eliminar" onClick={() => eliminarColaborador(id)} />
        <div className="encabezado" style={{ backgroundColor: colorDeFondo}}>
            <img src={foto} alt={nombre}/>
        </div>
        <div className="info">
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
            {
                fav === true? <AiFillHeart onClick={()=>cambioFav(id)}color="red"/> : <AiOutlineHeart onClick={()=>cambioFav(id)}/> 
            }
        </div>
        
    </div>
}

export default Colaborador