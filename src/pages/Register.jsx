import illustrator from "../illustrator.svg";
import GroupInput from "../components/GroupInput";
import Button from "../components/Button";

const Register = () => {
    return (
        <section id='register'>
            <div className="heroe">
                <img src={illustrator} alt="Illustration Job"/>
                <h1>POLE EMPLOI</h1>
                <p>Pour une meilleure insertion des jeunes congolais</p>
            </div>
            <form>
                <h2>Inscrivez-vous</h2>
                <p>Veuillez remplir tous les champs avant de soumettre le formulaire</p>
                <div className="container__groupInput">
                    <GroupInput type="text" label="Nom" name="name" placeholder="Delivrance"/>
                    <GroupInput type="text" label="Prénom" name="firstname" placeholder="Explodi"/>
                    <GroupInput type="email" label="Email" name="email" placeholder="johndoe@gmail.com"/>
                    <GroupInput type="tel" label="Téléphone" name="phone" placeholder="0811533644"/>
                    <GroupInput type="date" label="Age" name="age"/>
                    <GroupInput type="text" label="Province" name="province" placeholder="Kinshasa"/>
                    <GroupInput type="text" label="Diplome" name="diplome" placeholder="Licence"/>
                    <GroupInput type="text" label="Metier" name="metier" placeholder="Informatique"/>
                </div>
                <div className="div__btn">
                    <Button type="submit" label="Enregistrer" classe="btn-primary"/>
                </div>
            </form>
        </section>
    );
}

export default Register;