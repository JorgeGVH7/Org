import "./Campo.css"
const Campo = (props) => {

    const { type ="text" } = props

    const manejarCambio = (e) => {
        props.actualizarValor(e.target.value)
    }
    const placeholderModificado = `${props.placeholder}...`
    return <div className={`campo campo-${type}`}>
        <label>{props.title}</label>
        <input 
            placeholder={placeholderModificado} 
            required={props.required} 
            onChange={manejarCambio}
            type={type}
        />
    </div>
}

export default Campo