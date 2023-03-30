import {useState, useEffect} from "react";
import { useStateValue } from '../utils/stateProvider';

const Select = ({name, label, data}) => {
    const [select, setSelect] = useState();
    const [{userDiplome, userMetier, userProvince}, dispatch] = useStateValue();

    const handleChange = (e) => {
        setSelect(e.target.value);
    }

    useEffect(() => {
        if (name === "province") {
            dispatch({
                type: 'SET_USERPROVINCE',
                userProvince: select
            })
        }

        if (name === "diplome") {
            dispatch({
                type: 'SET_USERDIPLOME',
                userDiplome: select
            })
        }

        if (name === "metier") {
            dispatch({
                type: 'SET_USERMETIER',
                userMetier: select
            })
        }
    }, [userDiplome, userMetier, userProvince, select])
    
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