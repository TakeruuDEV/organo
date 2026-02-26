import "./Colaborator.css"

function Colaborator(prop){
    return (
        <div className="colaborator">
            <div className="header">
                <img src={prop.image} alt="Imagem do colaborador"/>
            </div>
            <div className="footer">
                <h4>{prop.name}</h4>
                <h5>{prop.role}</h5>
            </div>
        </div>
    )
}

export default Colaborator