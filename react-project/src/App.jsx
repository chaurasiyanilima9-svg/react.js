import './App.css'
import StateComp from './Components/StateComp'
import PropComp from './Components/PropComp';
import StateToggle from './Components/StateToggle';
import ResetCopm from './Components/ResetComp';
import ToggleBtnComp from './TuggleBtnComp';



function App() {

  return (
    <>
      <StateComp/>
      <StateToggle/>
      <ResetCopm/>
      <ToggleBtnComp/>
     
      <ResetCopm start={10} />



      <div className="container text-center mt-5">

        <h1>Conditional Styling Based on Props</h1>

        <PropComp Status="success" />
        <br />

        <PropComp Status="error" />
        <br />

        <PropComp Status="warning" />
      </div>
    </>
      
       
  );
}

export default App;
