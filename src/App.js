
import './App.css';
import { useState } from 'react';

function App() {
  const [inputPeso, setInputPeso] = useState('');
  const [inputAltura, setInputAltura] = useState('');
  const IMC = inputPeso/(inputAltura**2)
  const handleInputPesoChange = (event) => {
    setInputPeso(event.target.value);
  }
  const handleInputAlturaChange = (event) => {
    setInputAltura(event.target.value);
  }
  
  return (
  <div className="App">
  <main className="App-header">
  <label>Ingrese Su Peso:</label>
  <input
  type="text"
  value={inputPeso}
  onChange={handleInputPesoChange}
  />
  <label>Ingrese Su Altura:</label>
  <input
  type="text"
  value={inputAltura}
  onChange={handleInputAlturaChange}
  />
  <p>IMC: {IMC}</p>
  <p> Su IMC Indica: {CalcValue(IMC)}</p>
  </main>
  </div>
  );
  }
  function CalcValue(IMC){
    if (IMC < 18.5){
      return 'Bajo Peso'
    }
    else if(IMC < 24.9){
      return 'Peso Normal'
    }
    else if(IMC < 29.9){
      return 'Sobrepeso'
    }
    else if(IMC > 30){
      return 'Obesidad'
    }
  }
  export default App;
