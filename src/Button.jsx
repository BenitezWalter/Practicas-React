import PropTypes from 'prop-types'

export function Button({text, name = "User"}){
    return <button onClick={()=>console.log("click")}>
        {text}-{name}
    </button>
}

Button.propTypes = {
    text:PropTypes.string
}

