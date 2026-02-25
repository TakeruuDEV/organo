import "./Team.css"

function Team(prop){
    return (
        <section
            className="team" 
            style={{backgroundColor:prop.secondColor}}
        >
            <h3 style={{borderColor:prop.mainColor}}>{prop.nameTeam}</h3>

        </section>
    )
}

export default Team