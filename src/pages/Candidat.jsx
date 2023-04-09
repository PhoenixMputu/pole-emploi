import Header from "../components/Header";
import Container from "react-bootstrap/Container";
import Table from 'react-bootstrap/Table';
import { AiFillDelete } from "react-icons/ai";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import SplitButton from 'react-bootstrap/SplitButton';

const Candidat = () => {
    return (
        <>
            <Header/>
            <Container className="pt-5">
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Rechercher par nom" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                    <button className="input-group-text bg-primary" id="basic-addon2">Rechercher</button>
                </div>
                <Row className="gy-2 mb-3">
                    <Col md={2} xs={4}>
                        <SplitButton
                            key="primary"
                            id={`dropdown-split-variants-primary`}
                            variant='primary'
                            title="Age"
                        >
                            <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                            <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                            <Dropdown.Item eventKey="3" active>Active Item</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item eventKey="3">Separated link</Dropdown.Item>
                        </SplitButton>
                    </Col>
                    <Col md={2} xs={4}>
                        <SplitButton
                            key="primary"
                            id={`dropdown-split-variants-primary`}
                            variant='primary'
                            title="Sexe"
                        >
                            <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                            <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                            <Dropdown.Item eventKey="3" active>Active Item</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item eventKey="3">Separated link</Dropdown.Item>
                        </SplitButton>
                    </Col>
                    <Col md={2} xs={4}>
                        <SplitButton
                            key="primary"
                            id={`dropdown-split-variants-primary`}
                            variant='primary'
                            title="Province"
                        >
                            <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                            <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                            <Dropdown.Item eventKey="3" active>Active Item</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item eventKey="3">Separated link</Dropdown.Item>
                        </SplitButton>
                    </Col>
                    <Col md={2} xs={4}>
                        <SplitButton
                            key="primary"
                            id={`dropdown-split-variants-primary`}
                            variant='primary'
                            title="Diplome"
                        >
                            <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                            <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                            <Dropdown.Item eventKey="3" active>Active Item</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item eventKey="3">Separated link</Dropdown.Item>
                        </SplitButton>
                    </Col>
                    <Col md={2} xs={4}>
                        <SplitButton
                            key="primary"
                            id={`dropdown-split-variants-primary`}
                            variant='primary'
                            title="Domaine"
                        >
                            <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                            <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                            <Dropdown.Item eventKey="3" active>Active Item</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item eventKey="3">Separated link</Dropdown.Item>
                        </SplitButton>
                    </Col>
                </Row>
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
                            <td>+233811533633</td>
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

export default Candidat;