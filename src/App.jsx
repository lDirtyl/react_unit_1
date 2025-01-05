import Form from './components/Form/Form';
const App = () => {
  const handleSubmit = data => {
    console.log('data', data);
  };
  const handleSubmit2 = data => {
    console.log('data!!!!!!!!!!!!1', data);
  };

  return (
    <div>
      <Form submit={handleSubmit} />
      <br />
      <br />
      <br />
      <Form submit={handleSubmit2} />
    </div>
  );
};
export default App;
