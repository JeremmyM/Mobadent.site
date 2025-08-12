import React from 'react';
import { navigate } from 'gatsby';
import * as styles from './settings.module.css';

import AccountLayout from '../../components/AccountLayout';
import Button from '../../components/Button';
import Breadcrumbs from '../../components/Breadcrumbs';
import FormInputField from '../../components/FormInputField';
import Layout from '../../components/Layout/Layout';

import {
  validateEmail,
  validateStrongPassword,
  isAuth,
} from '../../helpers/general';

const SettingsPage = (props) => {
  if (isAuth() === false) {
    navigate('/login');
  }

  const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const errorState = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const [updateForm, setUpdateForm] = React.useState(initialState);
  const [error, setError] = React.useState(errorState);

  const handleChange = (id, e) => {
    const tempForm = { ...updateForm, [id]: e };
    setUpdateForm(tempForm);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let validForm = true;
    const tempError = { ...errorState };

    if (updateForm.email !== '') {
      if (validateEmail(updateForm.email) !== true) {
        validForm = false;
        tempError.email =
          'Por favor usa un correo válido, por ejemplo usuario@ejemplo.com.';
      }
    }

    if (updateForm.password !== '') {
      if (validateStrongPassword(updateForm.password) === false) {
        validForm = false;
        tempError.password =
          'La contraseña debe tener al menos 8 caracteres, 1 minúscula, 1 mayúscula y 1 número.';
      }

      if (updateForm.password !== updateForm.confirmPassword) {
        validForm = false;
        tempError.confirmPassword = 'La confirmación no coincide.';
      }
    }

    if (validForm === true) {
      //success
      setError(errorState);
      setUpdateForm(initialState);
    } else {
      setError(tempError);
    }
  };

  return (
    <Layout>
      <AccountLayout>
        <Breadcrumbs
          crumbs={[
            { link: '/', label: 'Inicio' },
            { link: '/account', label: 'Cuenta' },
            { link: '/account/settings', label: 'Configuración' },
          ]}
        />
        <h1>Configuración</h1>
        <div>
          <form onSubmit={(e) => handleSubmit(e)} noValidate>
            <div className={styles.nameSection}>
              <FormInputField
                id={'firstName'}
                value={updateForm.firstName}
                handleChange={(id, e) => handleChange(id, e)}
                type={'input'}
                labelName={'Nombres'}
              />
              <FormInputField
                id={'lastName'}
                value={updateForm.lastName}
                handleChange={(id, e) => handleChange(id, e)}
                type={'input'}
                labelName={'Apellidos'}
              />
              <FormInputField
                id={'email'}
                value={updateForm.email}
                handleChange={(id, e) => handleChange(id, e)}
                type={'email'}
                labelName={'Correo electrónico'}
                error={error.email}
              />
            </div>
            <div className={styles.passwordContainer}>
              <h2>Cambiar contraseña</h2>
              <div className={styles.passwordSection}>
                <FormInputField
                  id={'password'}
                  value={updateForm.password}
                  handleChange={(id, e) => handleChange(id, e)}
                  type={'password'}
                  labelName={'Nueva contraseña'}
                  error={error.password}
                />
                <FormInputField
                  id={'confirmPassword'}
                  value={updateForm.confirmPassword}
                  handleChange={(id, e) => handleChange(id, e)}
                  type={'password'}
                  labelName={'Confirmar contraseña'}
                  error={error.confirmPassword}
                />
                <Button level={'primary'} type={'submit'}>
                  actualizar
                </Button>
              </div>
            </div>
          </form>
        </div>
      </AccountLayout>
    </Layout>
  );
};

export default SettingsPage;
