import "./MiOrg.css"
const MiOrg = (props) =>{
    return <section className="orgSection">
        <h3>Mi Organización</h3>
        <img src="/img/add.png" alt="add" onClick={props.cambiar}/>
    </section>
}

export default MiOrg