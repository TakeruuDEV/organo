import './ListDown.css'

function ListDown(prop){
    return (
        <div className='list-down'>
            <label>{prop.label}</label>
            <select >
                {prop.itens.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}

export default ListDown