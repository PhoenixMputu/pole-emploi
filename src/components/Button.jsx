const Button = ({type, classe, label}) => {
    return <button type={type} className={`btn ${classe}`}>{label}</button>
}

export default Button;