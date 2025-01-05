import Field from './components/Field/Field';
import FieldSelect from './components/FieldSelect/FieldSelect';

const App = () => {
  // const [inputValue, setInputValue] = useState('');
  // const handleChange = ({ target: { value } }) => {
  //   console.log('value', value);
  //   if (value.includes('@')) return;
  //   setInputValue(value);

  const change = value => {
    console.log('value', value);
  };

  return (
    <div>
      <Field change={change} />
      <FieldSelect />
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
