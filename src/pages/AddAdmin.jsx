import React, { useState } from "react";
import Header from "../components/Header";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
//import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";

const { Formik } = formik;

const schema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  username: yup.string().required(),
  city: yup.string().required(),
  state: yup.string().required(),
  zip: yup.string().required(),
  terms: yup.bool().required().oneOf([true], "Terms must be accepted"),
});

const AddAdmin = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <>
      <Header />
      <Container className='pt-5 pb-5'>
        <h1 className='text-center'>Ajouter un administrateur</h1>
        <Formik
          validationSchema={schema}
          onSubmit={handleSubmit}
          initialValues={{
            firstName: "Mark",
            lastName: "Otto",
            username: "",
            city: "",
            state: "",
            zip: "",
            terms: false,
          }}>
          {({
            handleSubmit,
            handleChange,
            handleBlur,
            values,
            touched,
            isValid,
            errors,
          }) => (
            <Form
              noValidate
              validated={validated}
              onSubmit={handleSubmit}>
              <Form.Group
                className='mb-3'
                controlId='exampleForm.ControlInput1'>
                <Form.Label>Nom</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='John'
                  required
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group
                className='mb-3'
                controlId='exampleForm.ControlInput2'>
                <Form.Label>Prénom</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='John'
                  required
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group
                className='mb-3'
                controlId='exampleForm.ControlInput3'>
                <Form.Label>Sexe</Form.Label>
                <Form.Select aria-label='Default select example'>
                  <option>Open this select menu</option>
                  <option value='1'>One</option>
                  <option value='2'>Two</option>
                  <option value='3'>Three</option>
                </Form.Select>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group
                className='mb-3'
                controlId='exampleForm.ControlInput4'>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type='email'
                  placeholder='John@gmail.com'
                  required
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group
                className='mb-3'
                controlId='exampleForm.ControlInput4'>
                <Form.Label>Mot de passe</Form.Label>
                <Form.Control
                  type='password'
                  placeholder='********'
                  required
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <div className='d-grid gap-2'>
                <Button
                  type='submit'
                  variant='primary'
                  size='lg'>
                  Ajouter l'administrateur
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </Container>
    </>
  );
};

export default AddAdmin;