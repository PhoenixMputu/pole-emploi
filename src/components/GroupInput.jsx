import {useState, useEffect} from "react";

const GroupInput = ({type, placeholder, name, label, accept}) => {
    const [data, setData] = useState('');

    const handleChange = (e) => {
        setData(e.target.value);
    }

    return (
        <div className="groupInput">
            <label htmlFor={name}>{label}</label>
            <input type={type} placeholder={placeholder} name={name} reauired={true} accept={accept} onChange={handleChange}/>
        </div>
    );
}

export default GroupInput;