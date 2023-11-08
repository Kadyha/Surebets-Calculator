"use client";

import { useState } from 'react';


export default function Home() {
  const [valueOne, setValueOne] = useState(NaN);
  const [valueTwo, setValueTwo] = useState(NaN);
  const [valueThree, setValueThree] = useState(NaN);
  const [totalValue, setTotalValue] = useState(NaN);
  const [result, setResult] = useState(NaN);
  const [amountOne, setAmountOne] = useState(NaN);
  const [amountTwo, setAmountTwo] = useState(NaN);
  const [amountThree, setAmountThree] = useState(NaN);

  const handleEqual = () => {
    var temp1 = 0;
    if (valueThree == 0 || Number.isNaN(valueThree)) {
      temp1 = 1 / ((1 / valueOne) + (1 / valueTwo));
    } else {
      temp1 = 1 / ((1 / valueOne) + (1 / valueTwo) + (1 / valueThree));
    }

    setAmountOne((1 / valueOne) * temp1 * totalValue)
    setAmountTwo((1 / valueTwo) * temp1 * totalValue)
    setAmountThree((1 / valueThree) * temp1 * totalValue)




    setResult(10)
  };


  return (
    <>
      <main className="flex min-h-screen flex-col items-center  p-24">
        <div>
          <label>Cuota 1: </label>
          <input
            value={valueOne}
            onChange={e => setValueOne(Number(e.target.value))}
            type="number"
            defaultValue={0}
            placeholder="Cuota 1"
            style={{ color: 'black', backgroundColor: 'white' }} />
        </div> <br />

        <div>
          <label>Cuota 2: </label>
          <input
            value={valueTwo}
            onChange={e => setValueTwo(Number(e.target.value))}
            type="number"
            defaultValue={0}
            placeholder="Cuota 2"
            style={{ color: 'black', backgroundColor: 'white' }} />
        </div> <br />

        <div>
          <label>Cuota 3: </label>
          <input
            value={valueThree}
            onChange={e => setValueThree(Number(e.target.value))}
            type="number"
            placeholder="Cuota 3"
            style={{ color: 'black', backgroundColor: 'white' }} />
        </div> <br />

        <div>
          <label>Tamaño total de la apuesta: </label>
          <input
            value={totalValue}
            onChange={e => setTotalValue(Number(e.target.value))}
            type="number"
            defaultValue={0}
            placeholder="Tamaño total de la apuesta"
            style={{ color: 'black', backgroundColor: 'white' }} />
        </div> <br />



        <button onClick={handleEqual}>Calcular</button> <br />

        {(valueThree == 0 || Number.isNaN(valueThree)) &&
          <>
            <p>Cantidad 1: {parseFloat(String(amountOne)).toFixed(2)}</p>
            <p>Cantidad 2: {parseFloat(String(amountTwo)).toFixed(2)}</p>
          </>          
        }
        {valueThree > 0   &&
          <>
            <p>Cantidad 1: {parseFloat(String(amountOne)).toFixed(2)}</p>
            <p>Cantidad 2: {parseFloat(String(amountTwo)).toFixed(2)}</p>
            <p>Cantidad 3: {parseFloat(String(amountThree)).toFixed(2)}</p>
          </>          
        }

      </main>
    </>
  );
}

