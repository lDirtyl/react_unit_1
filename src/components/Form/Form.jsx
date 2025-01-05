import { useId } from 'react';

const Form = ({ submit }) => {
  const handleSubmit = e => {
    e.preventDefault();

    const res = {
      firstName: e.target.elements.firstName.value,
      lastName: e.target.elements.lastName.value,
    };

    submit(res);
    e.target.reset();
  };
  const firstNameId = useId();
  const lastNameId = useId();
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor={firstNameId}>First Name</label>
      <input type='text' name='firstName' id={firstNameId} />
      <br />

      <label htmlFor={lastNameId}>Last Name</label>
      <input type='text' name='lastName' id={lastNameId} />

      <br />
      <button type='submit'>Click</button>
    </form>
  );
};

export default Form;
