const GroupInput = ({type, placeholder, name, label}) => {
    return (
        <div className="groupInput">
            <label htmlFor={name}>{label}</label>
            <input type={type} placeholder={placeholder} name={name} reauired={true}/>
            <p className="error">Erreur</p>
        </div>
    );
}

export default GroupInput;