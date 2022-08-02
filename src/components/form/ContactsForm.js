import React from 'react';
import { ContainerForm, ButtonForm, InputForm } from './ContactsForm.styled';
import { Formik } from 'formik';
import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup.string().required(),
  number: yup.number().required(),
});

const values = {
  name: '',
  number: '',
};

const ContactsForm = ({ onSubmit }) => {
  const handleSubmit = (values, { resetForm }) => {
    onSubmit(values);
    resetForm();
  };

  return (
    <>
      <Formik
        initialValues={values}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        <ContainerForm autoComplete="off">
          <label htmlFor="name">
            <h3>Name</h3>
            <InputForm type="text" name="name" />
          </label>
          <label>
            <h3>Number</h3>
            <InputForm htmlFor="number" type="tel" name="number" />
          </label>
          <ButtonForm type="submit">Add contacts</ButtonForm>
        </ContainerForm>
      </Formik>
    </>
  );
};

export default ContactsForm;
