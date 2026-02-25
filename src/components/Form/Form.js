import "./Form.css"
import ShieldText from "../ShieldText/ShieldText"

function Form(){
    return (
        <section className="form">
            <form>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <ShieldText label="Nome"/>
                <ShieldText label="Cargo"/>
                <ShieldText label="Imagem"/>
                <ShieldText label="Time"/>
            </form>
        </section>
    )
}

export default Form