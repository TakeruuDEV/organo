import './Button.css'

function Button(prop){
    return(
        <button className='button'>
            {prop.text}
        </button>
    )
}

export default Button