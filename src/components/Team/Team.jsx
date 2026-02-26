import Colaborator from "../Colaborator/Colaborator"
import "./Team.css"

function Team(prop){
    return (
        prop.colaborators.length > 0 ?
        <section className="team" 
            style={{backgroundColor:prop.secondColor}}
        >
            <h3 style={{borderColor:prop.mainColor}}>{prop.nameTeam}</h3>
            <div className="colaborators">
            {prop.colaborators.map(colaborator => <Colaborator mainColor={prop.mainColor} key={colaborator.name} name={colaborator.name} role={colaborator.role} image={colaborator.image}/>)}
            </div>
        </section>
        : ""
    )
}

export default Team