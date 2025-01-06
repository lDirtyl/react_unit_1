import { Formik, Form, Field, ErrorMessage } from 'formik';
import css from './FormikForm.module.css';
import * as Yup from 'yup';

const FormikForm = ({ toSubmit }) => {
  const userSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(3, 'min 3')
      .max(10, 'max 10')
      .required('required'),
    lastName: Yup.string()
      .min(3, 'min 3')
      .max(10, 'max 10')
      .required('required'),
  });
  const handleSubmit = (values, actions) => {
    toSubmit(values);
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        lang: 'de',
      }}
      onSubmit={handleSubmit}
      validationSchema={userSchema}
    >
      <Form className={css.flex}>
        <label>
          firstNameId
          <Field type='text' name='firstName' />
          <ErrorMessage name='firstName' />
        </label>

        <br />
        <label>
          lastNameId
          <Field type='text' name='lastName' />
          <ErrorMessage name='lastName' />
        </label>
        <label>
          <Field as='select' name='lang'>
            <option value='ua'>UA</option>
            <option value='de'>DE</option>
            <option value='en'>EN</option>
          </Field>
          <ErrorMessage name='lang' />
        </label>

        <br />
        <button type='submit'>submit</button>
      </Form>
    </Formik>
  );
};

export default FormikForm;
