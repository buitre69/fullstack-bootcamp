import './App.css';

import Mensaje from './Mensaje.js'

const Description = () => {
  return <p>Web de la app de Fullstack Bootcamp</p>
} 

const App = () => {
  
  const a = 3.444
  const b = 1.334
  return (
    <div className="App">
      <Mensaje color='red' message='Estamos trabajando'/>
      <Mensaje color='green' message='Desde casa'/>
      <Mensaje color='yellow' message='En React'/>
      <Description/>
      {+new Date()}

      <h1>App de react</h1>
      <strong>Estamos trabajando...</strong>
      <div>
        <p>El resultado es: </p>
        {a + b}
      </div>
    </div>
  );
}

export default App;
