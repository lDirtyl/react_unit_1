import { useState } from 'react';
import { useId } from 'react';

const App = () => {
  const firstNameId = useId();
  const lastNameId = useId();

  const [firstNameValue, setFirstNameValue] = useState('');
  const [lastNameValue, setLastNameValue] = useState('');

  const habdleChangeFirstName = ({target: {value}}) => {
    //
    setFirstNameValue(value);
  };
  const habdleChangeLastName = ({target: {value}}) => {
    //
    setLastNameValue(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor={firstNameId}>firstName</label>
        <input
          type='text'
          id={firstNameId}
          value={firstNameValue}
          onChange={habdleChangeFirstName}
        />
        <br />
        <label htmlFor={lastNameId}>lastName</label>
        <input
          type='text'
          id={lastNameId}
          value={lastNameValue}
          onChange={habdleChangeLastName}
        />
        <br />
        <button type='submit'>click</button>
      </form>
    </div>
  );
};
export default App;

// import Form from './components/Form/Form';
// const App = () => {
//   const handleSubmit = data => {
//     console.log('data', data);
//   };
//   const handleSubmit2 = data => {
//     console.log('data!!!!!!!!!!!!1', data);
//   };

//   return (
//     <div>
//       <Form submit={handleSubmit} />
//       <br />
//       <br />
//       <br />
//       <Form submit={handleSubmit2} />
//     </div>
//   );
// };
// export default App;
