import "./ShieldText.css"

function ShieldText(prop) {
    return (
        <div className="shield-txt">
            <label>{prop.label}</label>
            <input required={prop.mandatory} placeholder={prop.placeholder}/>
        </div>
    )
}

export default ShieldText