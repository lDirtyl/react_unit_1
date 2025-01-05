import ControlForm from './components/ControlForm/ControlForm';

const App = () => {
  const toSubmit = (data) => {
    console.log("data", data);
  }
    

  return (
    <div>
      <ControlForm toSubmit={toSubmit}/>
    </div>
  );
};
export default App;
