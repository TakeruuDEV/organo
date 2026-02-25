import "./Form.css"
import ShieldText from "../ShieldText/ShieldText"
import ListDown from "../ListDown/ListDown"
import Button from "../Button/Button"
import { useState } from "react"

function Form(prop){

    const [name, setName] = useState("")
    const [role, setRole] = useState("")
    const [image, setImage] = useState("")
    const [team, setTeam] = useState("")



    const onSave = (event) => {
        event.preventDefault()
        prop.onColaboratorRegistred({
            name,
            role,
            image,
            team
        })
    }
    return (
        <section className="form">
            <form onSubmit={onSave}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <ShieldText
                    mandatory={true}
                    label="Nome"
                    placeholder="Digite o seu nome"
                    value={name}
                    onUpdate={value => setName(value)}
                />
                <ShieldText
                    mandatory={true}
                    label="Cargo"
                    placeholder="Digite o seu cargo"
                    value={role}
                    onUpdate={value => setRole(value)}
                />
                <ShieldText
                    label="Imagem"
                    placeholder="Digite o endereço da imagem"
                    value={image}
                    onUpdate={value => setImage(value)}
                />
                <ListDown
                    label="Time"
                    itens={prop.teams.map(team => team.name)}
                    value={team}
                    onUpdate={value => setTeam(value)}
                />
                <Button text='Criar Card'/>
            </form>
        </section>
    )
}

export default Form