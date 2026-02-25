import "./ShieldText.css"

function ShieldText(prop) {

    const onType= (event) =>{
        prop.onUpdate(event.target.value)
    }

    return (
        <div className="shield-txt">
            <label>{prop.label}</label>
            <input value={prop.value} onChange={onType} required={prop.mandatory} placeholder={prop.placeholder}/>
        </div>
    )
}

export default ShieldText