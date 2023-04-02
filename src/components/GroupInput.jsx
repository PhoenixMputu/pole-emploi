import {useState, useEffect} from "react";
import { useStateValue } from '../utils/stateProvider';

const GroupInput = ({type, placeholder, name, label, accept}) => {
    const [data, setData] = useState('');
    const [image, setImage] = useState();
    const [{userName, userFirstName, userEmail, userPhone, userAge, userCV, userCard}, dispatch] = useStateValue();

    const handleChange = (e) => {
        setData(e.target.value);
    }

    const handleImageChange = (imageSelected) => {
        if (imageSelected) {
          setImage(imageSelected[0])
        }
    }

    useEffect(() => {
        if (name === "name") {
            dispatch({
                type: 'SET_USERNAME',
                userName: data
            })
        }

        if (name === "firstname") {
            dispatch({
                type: 'SET_USERFIRSTNAME',
                userFirstName: data
            })
        }

        if (name === "email") {
            dispatch({
                type: 'SET_USEREMAIL',
                userEmail: data
            })
        }

        if (name === "phone") {
            dispatch({
                type: 'SET_USERPHONE',
                userPhone: data
            })
        }

        if (name === "age") {
            dispatch({
                type: 'SET_USERAGE',
                userAge: data
            })
        }

        if (name === "cv") {
            dispatch({
                type: 'SET_USERCV',
                userCV: image
            })
        }

        if (name === "cardMembre") {
            dispatch({
                type: 'SET_USERCARD',
                userCard: image
            })
        }
    }, [userName, userFirstName, userEmail, userPhone, userAge, userCV, userCard, data, image]);

    return (
        <div className="groupInput">
            <label htmlFor={name}>{label}</label>
            <input type={type} placeholder={placeholder} name={name} required={true} accept={accept} onChange={type === 'file' ? (e) => handleImageChange(e.target.files) : handleChange}/>
        </div>
    );
}

export default GroupInput;