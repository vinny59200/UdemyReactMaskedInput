import './App.css';
import PaymentCardInput from './PaymentCardinput';
import PhoneNumberInput from './PhoneNumberInput';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <PhoneNumberInput/>
       <br/><br/><br/><br/>
       <PaymentCardInput/>
      </header>
    </div>
  );
}

export default App;
