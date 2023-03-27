import {useState} from "react";

const GroupInput = ({type, placeholder, name, label, accept}) => {
    const [error, setError] = useState('')
    return (
        <div className="groupInput">
            <label htmlFor={name}>{label}</label>
            <input type={type} placeholder={placeholder} name={name} reauired={true} accept="pdf"/>
            {error ? <p className="error">Erreur</p> : null}
        </div>
    );
}

export default GroupInput;