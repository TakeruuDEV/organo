import './ListDown.css'

function ListDown(prop){
    return (
        <div className='list-down'>
            <label>{prop.label}</label>
            <select 
            onChange={event => prop.onUpdate(event.target.value)} 
            value={prop.value}
            >
                <option value="">Selecione um time</option>
                {prop.itens.map(item => {
                    return <option key={item}>{item}</option>
                })}

            </select>
        </div>
    )
}

export default ListDown