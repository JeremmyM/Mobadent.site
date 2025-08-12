import React, { useState } from 'react';
import { navigate } from 'gatsby';
import {
  validateEmail,
  validateStrongPassword,
  isEmpty,
} from '../helpers/general';
import * as styles from './signup.module.css';

import AttributeGrid from '../components/AttributeGrid/AttributeGrid';
import Layout from '../components/Layout/Layout';
import FormInputField from '../components/FormInputField/FormInputField';
import Button from '../components/Button';

const SignupPage = (props) => {
  const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  };

  const errorState = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  };

  const [signupForm, setSignupForm] = useState(initialState);
  const [errorForm, setErrorForm] = useState(errorState);

  const handleChange = (id, e) => {
    const tempForm = { ...signupForm, [id]: e };
    setSignupForm(tempForm);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let validForm = true;
    const tempError = { ...errorState };

    if (isEmpty(signupForm.firstName) === true) {
      tempError.firstName = 'Campo obligatorio';
      validForm = false;
    }

    if (isEmpty(signupForm.lastName) === true) {
      tempError.lastName = 'Campo obligatorio';
      validForm = false;
    }

    if (validateEmail(signupForm.email) !== true) {
      tempError.email =
        'Por favor, usa un correo válido, por ejemplo usuario@ejemplo.com.';
      validForm = false;
    }

    if (validateStrongPassword(signupForm.password) !== true) {
      tempError.password =
        'La contraseña debe tener al menos 8 caracteres, 1 minúscula, 1 mayúscula y 1 número.';
      validForm = false;
    }

    if (validForm === true) {
      setErrorForm(errorState);
      navigate('/accountSuccess');
      window.localStorage.setItem('key', 'sampleToken');
      //create account endpoint
    } else {
      setErrorForm(tempError);
    }
  };

  return (
    <Layout disablePaddingBottom={true}>
      <div className={styles.root}>
        <div className={styles.signupFormContainer}>
          <h1 className={styles.title}>Crear cuenta</h1>
          <span className={styles.subtitle}>
            Por favor, ingresa la información a continuación:
          </span>
          <form
            noValidate
            className={styles.signupForm}
            onSubmit={(e) => handleSubmit(e)}
          >
            <FormInputField
              id={'firstName'}
              value={signupForm.firstName}
              handleChange={(id, e) => handleChange(id, e)}
              type={'input'}
              labelName={'Nombre'}
              error={errorForm.firstName}
            />

            <FormInputField
              id={'lastName'}
              value={signupForm.lastName}
              handleChange={(id, e) => handleChange(id, e)}
              type={'input'}
              labelName={'Apellido'}
              error={errorForm.lastName}
            />

            <FormInputField
              id={'email'}
              value={signupForm.email}
              handleChange={(id, e) => handleChange(id, e)}
              type={'email'}
              labelName={'Correo electrónico'}
              error={errorForm.email}
            />

            <FormInputField
              id={'password'}
              value={signupForm.password}
              handleChange={(id, e) => handleChange(id, e)}
              type={'password'}
              labelName={'Contraseña'}
              error={errorForm.password}
            />

            <Button fullWidth type={'submit'} level={'primary'}>
              crear cuenta
            </Button>
            <span className={styles.reminder}>¿Ya tienes una cuenta?</span>
            <Button
              type={'button'}
              onClick={() => navigate('/login')}
              fullWidth
              level={'secondary'}
            >
              iniciar sesión
            </Button>
          </form>
        </div>

        <div className={styles.attributeGridContainer}>
          <AttributeGrid />
        </div>
      </div>
    </Layout>
  );
};

export default SignupPage;
