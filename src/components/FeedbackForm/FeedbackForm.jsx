import { Formik, Form, Field } from 'formik';
import { useId } from 'react';

const initialValues = {
  username: '',
  email: '',
  message: '',
  level: 'good',
};
const FeedbackForm = () => {
  const nameFieldId = useId();
  const emailFieldId = useId();
  const msgFieldId = useId();
  const levelFieldId = useId();

  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form>
        <label htmlFor={nameFieldId}>Username</label>
        <Field type='text' name='username' id={nameFieldId} />
        <br />
        <label htmlFor={emailFieldId}>Email</label>
        <Field type='text' name='email' id={emailFieldId} />
        <br />
        <Field as='textarea' name='message' id={msgFieldId} rows='5' />
        <br />
        <label htmlFor={levelFieldId}>Service satisfaction level</label>
        <Field as='select' name='level' id='levelFieldId'>
          <option value='good'>Good</option>
          <option value='neutral'>Neutral</option>
          <option value='bad'>Bad</option>
        </Field>
        <br />
        <button type='submit'>Submit</button>
      </Form>
    </Formik>
  );
};

export default FeedbackForm;
