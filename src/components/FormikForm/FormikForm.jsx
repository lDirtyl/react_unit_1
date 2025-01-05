import { Formik, Form, Field } from 'formik';
import css from './FormikForm.module.css'

const FormikForm = ({toSubmit}) => {
//   const firstNameId = use

  const handleSubmit = (values, actions) => {
    toSubmit(values)
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
      }}
      onSubmit={handleSubmit}
    >
      <Form className={css.flex}>
        <label>
          firstNameId
          <Field type='text' name='firstName' />
        </label>

        <br />
        <label>
          lastNameId
          <Field type='text' name='lastName' />
        </label>

        <br />
        <button type='submit'>submit</button>
      </Form>
    </Formik>
  );
};

export default FormikForm;
