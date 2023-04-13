import React, { useState } from "react";
import Header from "../components/Header";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
//import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import * as formik from 'formik';
import * as yup from 'yup'

const AddAdmin = () => {
  const [validated, setValidated] = useState(false);
  const { Formik } = formik;

  const schema = yup.object().shape({
    name: yup.string().required(),
    firstName: yup.string().required(),
    email: yup.string().required(),
    password: yup.string().required()
  });

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
            name: "Mark",
            firstName: "Otto",
            email: "",
            password: "",
          }}>
          {({
            handleSubmit,
            handleChange,
            values,
            touched,
            isValid,
            errors,
          }) => (
            <Form
              noValidate
              onSubmit={handleSubmit}>
              <Form.Group
                className='mb-3'
                controlId='exampleForm.ControlInput1'>
                <Form.Label>Nom</Form.Label>
                <Form.Control
                  type='text'
                  name="name"
                  placeholder='John'
                  value={values.name}
                  onChange={handleChange}
                  isValid={touched.name && !errors.name}
                  required
                />
                <Form.Control.Feedback type="invalid">Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group
                className='mb-3'
                controlId='exampleForm.ControlInput2'>
                <Form.Label>Prénom</Form.Label>
                <Form.Control
                  type='text'
                  name="firstName"
                  placeholder='John'
                  value={values.firstName}
                  onChange={handleChange}
                  isValid={touched.firstName && !errors.firstName}
                  required
                />
                <Form.Control.Feedback type="invalid">Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group
                className='mb-3'
                controlId='exampleForm.ControlInput3'>
                <Form.Label>Sexe</Form.Label>
                <Form.Select aria-label='Default select example' onChange={handleChange}>
                  <option>Open this select menu</option>
                  <option value='1'>One</option>
                  <option value='2'>Two</option>
                  <option value='3'>Three</option>
                </Form.Select>
              </Form.Group>
              <Form.Group
                className='mb-3'
                controlId='exampleForm.ControlInput4'>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type='email'
                  name="email"
                  placeholder='John@gmail.com'
                  onChange={handleChange}
                  value={values.email}
                  isInvalid={!!errors.email}
                  required
                />
                <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
              </Form.Group>
              <Form.Group
                className='mb-3'
                controlId='exampleForm.ControlInput4'>
                <Form.Label>Mot de passe</Form.Label>
                <Form.Control
                  type='password'
                  placeholder='********'
                  name="password"
                  onChange={handleChange}
                  value={values.password}
                  isInvalid={errors.password}
                  required
                />
                <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
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