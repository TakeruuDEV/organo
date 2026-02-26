import { useState } from "react"
import ShieldText from "../ShieldText/ShieldText"
import "./FormTeam.css"
import Button from "../Button/Button"

function FormTeam(prop) {
    const [teamName, setTName] = useState("")
    const [mainColor, setMColor] = useState("")
    const [secondColor, setSColor] = useState("")

    const onSaveTeam = (event) => {
        event.preventDefault()
        prop.newTeamAdded({
            name:teamName,
            mainColor,
            secondColor
        })
        setTName("")
        setMColor("")
        setSColor("")
    }

    return (
        <section className="form-team">
            <form onSubmit={onSaveTeam}>
                <h2>Preencha as informações para criar um novo time</h2>
                <ShieldText
                    mandatory={true}
                    label="Time"
                    placeholder="Digite o nome do time"
                    value={teamName}
                    onUpdate={value => setTName(value)}
                />
                <div>
                    <label>Defina a cor primária: </label>
                    <input
                        className="pick-color"
                        type="color"
                        value={mainColor}
                        onChange={(value) => setMColor(value.target.value)}
                    />
                </div>

                <div>
                    <label>Defina a cor secundária: </label>
                    <input
                        className="pick-color"
                        type="color"
                        value={secondColor}
                        onChange={(value) => setSColor(value.target.value)}
                    />
                </div>




                <Button text='Criar Time' />
            </form>
        </section>

    )
}

export default FormTeam