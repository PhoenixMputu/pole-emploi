import { useStateValue } from '../utils/stateProvider'
import GroupInput from "../components/GroupInput";
import Button from "../components/Button";

const Login = () => {
    const [{adminEmail, password}] = useStateValue();
    console.table(adminEmail, password);
    return (
        <div className="container_login">
            <form className="login">
                <h1>Administrateur</h1>
                <GroupInput type="email" label="Email" name="adminEmail" placeholder="John@gmail.com"/>
                <GroupInput type="password" label="Mot de passe" name="password" placeholder="*******"/>
                <Button type="submit" label="Se connecter" classe="btn-primary"/>
                <p>Mot de passe oublié ?</p>
            </form>
        </div>
    )
}

export default Login;