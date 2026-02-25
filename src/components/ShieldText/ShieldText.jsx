import "./ShieldText.css"

function ShieldText(label) {
    let labelBase = label.label
    let placeholderBase = `Digite o seu ${labelBase.toLowerCase()}`
    return (
        <div className="shield-txt">
            <label>{labelBase}</label>
            <input placeholder={placeholderBase}/>
        </div>
    )
}

export default ShieldText