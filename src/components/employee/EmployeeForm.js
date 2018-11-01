import React, { PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';
import { createNumberMask, createTextMask } from 'redux-form-input-masks';
import FieldInput from '../common/FieldInput';

export const EmployeeForm = ({ handleSubmit, pristine, reset, submitting, heading, authors, handleSave, handleCancel }) => {
  const salaryMask = createNumberMask({
    prefix: 'RD$ ',
    suffix: ' por mes',
    decimalPlaces: 2,
    locale: 'en-US',
  });

  const identificationMask = createTextMask({
    pattern: '999-99999-999',
  });

  return (
    <form onSubmit={handleSubmit(handleSave)}>
      <h1>{heading}</h1>

      <Field
        type="text"
        name="name"
        label="Nombre"
        placeholder="Nombre y Apellidos del Empleado"
        component={FieldInput}
      />

      <Field
        type="text"
        name="identification"
        label="Identificacion"
        placeholder="Cedula del Empleado"
        component={FieldInput}
        {...identificationMask}
      />

      <Field
        type="text"
        name="departament"
        label="Departamento"
        placeholder="Departamento..."
        component={FieldInput}
      />

      <Field
        type="text"
        name="jobTitle"
        label="Puesto"
        placeholder="Titulo del puesto"
        component={FieldInput}
      />

      <Field
        type="text"
        name="monthSalary"
        label="Salario"
        placeholder="Salario mensual"
        component={FieldInput}
        {...salaryMask}
      />

      <div>
        <button type="submit" disabled={submitting} className="btn btn-primary"><i className="fa fa-paper-plane-o"
                                                                                   aria-hidden="true"/> Guardar
        </button>

        {heading === 'Agregar' && <button type="button" disabled={pristine || submitting} onClick={reset}
                                      className="btn btn-default btn-space">Limpiar Campos</button>}

        <button type="button" className="btn btn-default btn-space" onClick={handleCancel}>Cancelar</button>
      </div>
    </form>
  );
};


const validate = values => {
  const errors = {};

  if (!values.name) {
    errors.name = 'Required';
  }

  if (!values.identification) {
    errors.identification = 'Required';
  }

  if (!values.department) {
    errors.department = 'Required';
  }

  if (!values.jobTitle) {
    errors.jobTitle = 'Required';
  }

  if (!values.monthSalary) {
    errors.monthSalary = 'Required';
  }

  return errors;
};


EmployeeForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  reset: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
  heading: PropTypes.string.isRequired,
  authors: PropTypes.array.isRequired,
  handleSave: PropTypes.func.isRequired,
  handleCancel: PropTypes.func.isRequired
};


export default reduxForm({
  form: 'EmployeeForm',
  validate
})(EmployeeForm);
