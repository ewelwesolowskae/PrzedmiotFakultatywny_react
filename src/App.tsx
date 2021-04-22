import React from 'react';
import logo from './logo.svg';
import './App.css';

import CustomHeader,  { addNumber } from './components/CustomHeader';
import Counter from './components/Counter';

const App = () => {
  const addedNumber = addNumber(1,2);
  const [changedNumber, setChangedNumber] = React.useState(0);

  const handleNumberChange = (newNumber: number) => {
    setChangedNumber(newNumber);
    
  }

  const liczbaMniejszaOdZera = (liczba: number)=>{
    if (liczba < 0){
      return (<div>liczba jest mniejsza od zera</div>)
    }
  }


  return (
    <div className="App">
      <CustomHeader>
        <Counter  onNumberChange={handleNumberChange}/>
        {
          changedNumber > 0 && (<div>liczba jest wieksza od 0</div>)
        }
        {liczbaMniejszaOdZera(changedNumber)}
      </CustomHeader>
      
    </div>
  );
}

export default App;
 