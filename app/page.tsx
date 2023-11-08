"use client";

import { useState } from 'react';


export default function Home() {
  const [valueOne, setValueOne] = useState('');
  const [valueTwo, setValueTwo] = useState('');
  const [valueThree, setValueThree] = useState('');
  const [totalValue, setTotalValue] = useState('');
  const [result, setResult] = useState('');
  const [amountOne, setAmountOne] = useState('');
  const [amountTwo, setAmountTwo] = useState('');
  const [amountThree, setAmountThree] = useState('');

  const handleEqual = () => {
    var temp1 = 0;
    if (valueThree == '0' || valueThree == '') {
      temp1 = 1 / ((1 / Number(valueOne)) + (1 / Number(valueTwo)));
    } else {
      temp1 = 1 / ((1 / Number(valueOne)) + (1 / Number(valueTwo)) + (1 / Number(valueThree)));
    }

    setAmountOne(String((1 / Number(valueOne)) * temp1 * Number(totalValue)))
    setAmountTwo(String((1 / Number(valueTwo)) * temp1 * Number(totalValue)))
    setAmountThree(String((1 / Number(valueThree)) * temp1 * Number(totalValue)))




    setResult('10')
  };


  return (
    <>
      <main className="flex min-h-screen flex-col items-center  p-24">
        <div>
          <label>Cuota 1: </label>
          <input
            value={valueOne}
            onChange={e => setValueOne((e.target.value))}
            type="number"
            defaultValue={0}
            placeholder="Cuota 1"
            style={{ color: 'black', backgroundColor: 'white' }} />
        </div> <br />

        <div>
          <label>Cuota 2: </label>
          <input
            value={valueTwo}
            onChange={e => setValueTwo((e.target.value))}
            type="number"
            defaultValue={0}
            placeholder="Cuota 2"
            style={{ color: 'black', backgroundColor: 'white' }} />
        </div> <br />

        <div>
          <label>Cuota 3: </label>
          <input
            value={valueThree}
            onChange={e => setValueThree((e.target.value))}
            type="number"
            placeholder="Cuota 3"
            style={{ color: 'black', backgroundColor: 'white' }} />
        </div> <br />

        <div>
          <label>Tamaño total de la apuesta: </label>
          <input
            value={totalValue}
            onChange={e => setTotalValue((e.target.value))}
            type="number"
            defaultValue={0}
            placeholder="Tamaño total de la apuesta"
            style={{ color: 'black', backgroundColor: 'white' }} />
        </div> <br />



        <button onClick={handleEqual}>Calcular</button> <br />

        {(valueThree == '0' || valueThree == '') &&
          <>
            <p>Cantidad 1: {parseFloat(String(amountOne)).toFixed(2)}</p>
            <p>Cantidad 2: {parseFloat(String(amountTwo)).toFixed(2)}</p>
          </>          
        }
        {Number(valueThree) > 0   &&
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

