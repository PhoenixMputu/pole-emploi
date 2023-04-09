import Header from "../components/Header";
import Container from "react-bootstrap/Container";
import Table from 'react-bootstrap/Table';
import { AiFillDelete } from "react-icons/ai";

const Administrator = () => {
    return (
        <>
            <Header/>
            <Container className="pt-5">
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Rechercher par nom" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                    <button className="input-group-text bg-primary" id="basic-addon2">Rechercher</button>
                </div>
                <Table responsive>
                    <thead>
                        <tr>
                            <th>Nom</th>
                            <th>Prénom</th>
                            <th>Sexe</th>
                            <th>Email</th>
                            <th>Téléphone</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Mujinga</td>
                            <td>Cosette</td>
                            <td>F</td>
                            <td>jhon@gmail.com</td>
                            <td>+243811533644</td>
                            <td>
                                <AiFillDelete color="red"/>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        </>
    )
}

export default Administrator;