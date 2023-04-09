import illustrator from "../illustrator.svg";
import { Switch, Route, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const Header = () => {
  return (
    <Navbar
      collapseOnSelect
      expand='lg'
      variant='dark'
      className='background'>
      <Container>
        <Navbar.Brand
          as={Link}
          to='/dashboard'>
          <img
            src={illustrator}
            width='30'
            height='30'
            className='d-inline-block align-top'
            alt='Logo de pole emploi'
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='me-auto'>
          <Nav.Link
              as={Link}
              to='/dashboard'>
              Accueil
            </Nav.Link>
            <NavDropdown
              title='Administrateurs'
              id='collasible-nav-dropdown'>
              <NavDropdown.Item as={Link} to='/administrator'>Liste des administrateurs</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to='/addAdmin'>Ajouter un administrateur</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link
              as={Link}
              to='/candidat'>
              Candidats
            </Nav.Link>
            <NavDropdown
              title="Offres d'emploi"
              id='collasible-nav-dropdown'>
              <NavDropdown.Item as={Link} to='/offer'>Liste d'offres</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to='/addOffer'>Ajouter un offre</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title="Domaines"
              id='collasible-nav-dropdown'>
              <NavDropdown.Item as={Link} to='/domaine'>Liste des domaines</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to='#action/3.2'>Ajouter un domaine</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <NavDropdown
              title='Victory Deo'
              id='collasible-nav-dropdown'>
              <NavDropdown.Item href='#action/3.1'>
                Changer le mot de passe
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='#action/3.4'>
                Se déconnecter
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
