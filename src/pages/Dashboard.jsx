import Header from "../components/Header";
import Container from "react-bootstrap/Container";
import CardWrapper from "../components/CardWrapper";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Dashboard = () => {
    return (
        <>
            <Header/>
            <Container className="pt-5">
                <Row className="gy-4">
                    <Col md={3} sm={6}>
                        <CardWrapper label="Hello World !" number={20} description="Localhost Hello World !"/>
                    </Col>
                    <Col md={3} sm={6}>
                        <CardWrapper label="Hello World !" number={20} description="Localhost Hello World !"/>
                    </Col>
                    <Col md={3} sm={6}>
                        <CardWrapper label="Hello World !" number={20} description="Localhost Hello World !"/>
                    </Col>
                    <Col md={3} sm={6}>
                        <CardWrapper label="Hello World !" number={20} description="Localhost Hello World !"/>
                    </Col>
                    <Col md={3} sm={6}>
                        <CardWrapper label="Hello World !" number={20} description="Localhost Hello World !"/>
                    </Col>
                    <Col md={3} sm={6}>
                        <CardWrapper label="Hello World !" number={20} description="Localhost Hello World !"/>
                    </Col>
                    <Col md={3} sm={6}>
                        <CardWrapper label="Hello World !" number={20} description="Localhost Hello World !"/>
                    </Col>
                    <Col md={3} sm={6}>
                        <CardWrapper label="Hello World !" number={20} description="Localhost Hello World !"/>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Dashboard;