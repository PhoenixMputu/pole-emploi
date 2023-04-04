//import {useState} from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import illustrator from "../illustrator.svg";
import GroupInput from "../components/GroupInput";
import Button from "../components/Button";
import Select from "../components/Select";
import { useStateValue } from '../utils/stateProvider'

const Register = () => {
    const [{userName, userFirstName, userPhone, userDiplome, userMetier, userProvince}] = useStateValue();

    const data = [
        {id: 1, value: "Informatique"},
        {id: 2, value: "Art"}
    ];

    const handleSubmit = (e) => {
        e.preventDefault();

        if (userName.length < 3 || userFirstName.length < 3) {
            toast.warn("Le nom et prénom doivent avoir au moins 3 caractères !", {
                position: toast.POSITION.TOP_RIGHT
            })
        }

        if (userPhone.length < 10) {
            toast.warn("Le numéro doit avoir 10 chiffres !", {
                position: toast.POSITION.TOP_RIGHT
            })
        }

        if (userDiplome === '0' || userProvince === '0' || userMetier === '0' || userDiplome === 'undefined' || userProvince === 'undefined' || userMetier === 'undefined') {
            toast.warn("Choisissez une option !", {
                position: toast.POSITION.TOP_RIGHT
            })
        }
    }

    return (
        <section id='register'>
            <div className="heroe">
                <img src={illustrator} alt="Illustration Job"/>
                <h1>POLE EMPLOI</h1>
                <p>Pour une meilleure insertion des jeunes congolais</p>
            </div>
            <form encType="multipart" onSubmit={handleSubmit}>
                <ToastContainer />
                <h2>Inscrivez-vous</h2>
                <p>Veuillez remplir tous les champs avant de soumettre le formulaire</p>
                <div className="container__groupInput">
                    <GroupInput type="text" label="Nom" name="name" placeholder="Delivrance"/>
                    <GroupInput type="text" label="Prénom" name="firstname" placeholder="Explodi"/>
                    <GroupInput type="email" label="Email" name="email" placeholder="johndoe@gmail.com"/>
                    <GroupInput type="tel" label="Téléphone" name="phone" placeholder="0811533644"/>
                    <GroupInput type="date" label="Age" name="age"/>
                    <Select name="province" label="Province" data={data}/>
                    <Select name="diplome" label="Niveau d'étude" data={data}/>
                    <Select name="metier" label="Metier" data={data}/>
                    <GroupInput type="file" label="CV" name="cv" accept=".pdf"/>
                    <GroupInput type="file" label="Carte de membre" name="cardMembre" accept="image/png, jpg, jpeg"/>
                </div>
                <div className="div__btn">
                    <Button type="submit" label="Enregistrer" classe="btn-primary"/>
                </div>
            </form>
        </section>
    );
}

export default Register;