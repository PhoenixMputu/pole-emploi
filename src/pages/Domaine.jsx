import Header from "../components/Header";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";

const Domaine = () => {
  return (
    <>
      <Header />
      <Container className='pt-5'>
        <div className='input-group mb-3'>
          <input
            type='text'
            className='form-control'
            placeholder='Rechercher par poste'
            aria-label="Recipient's username"
            aria-describedby='basic-addon2'
          />
          <button
            className='input-group-text bg-primary'
            id='basic-addon2'>
            Rechercher
          </button>
        </div>
        <Table responsive bordered hover>
          <thead>
            <tr>
              <th>Nom</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Mujinga</td>
              <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt expedita provident architecto impedit dolore pariatur autem, sunt quasi quidem reprehenderit praesentium quae odit aliquid consectetur voluptas eum repellat beatae at.</td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default Domaine;