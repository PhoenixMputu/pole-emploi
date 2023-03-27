import {useState} from "react";

const Select = ({name, label, data}) => {
    const [select, setSelect] = useState();

    console.log(select);

    const handleChange = (e) => {
        setSelect(e.target.value);
    }
    
    return (
        <div className="groupInput">
            <label htmlFor={name}>{label}</label>
            <select name={name} id={name} onChange={handleChange}>
                <option value="Choisissez votre metier">Choisissez votre metier</option>
                {data?.map(({value, id}) => <option value={value} key={id}>{value}</option>)}
            </select>
        </div>
    );
}

export default Select;