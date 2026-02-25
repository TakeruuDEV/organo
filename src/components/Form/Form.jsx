import "./Form.css"
import ShieldText from "../ShieldText/ShieldText"
import ListDown from "../ListDown/ListDown"
import Button from "../Button/Button"

function Form(){
    const teams = [
        "Back-end",
        "Front-end",
        "Data Science",
        "DevOps",
        "UX e Design",
        "Mobile",
        "Inova e Gestão"
    ]

    const onSave = (event) => {
        event.preventDefault()
        console.log("Form foi submetido");
    }
    return (
        <section className="form">
            <form onSubmit={onSave}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <ShieldText mandatory={true} label="Nome" placeholder="Digite o seu nome"/>
                <ShieldText mandatory={true} label="Cargo" placeholder="Digite o seu cargo"/>
                <ShieldText label="Imagem" placeholder="Digite o endereço da imagem"/>
                <ListDown label="Time" itens={teams}/>
                <Button text='Criar Card'/>
            </form>
        </section>
    )
}

export default Form