"use client";

import { useState } from 'react';

export default function Home() {
  const [valueOne, setValueOne] = useState('');
  const [valueTwo, setValueTwo] = useState('');
  const [valueThree, setValueThree] = useState('');
  const [totalValue, setTotalValue] = useState('');
  const [result, setResult] = useState('');
  const [amountOne, setAmountOne] = useState('0');
  const [amountTwo, setAmountTwo] = useState('0');
  const [amountThree, setAmountThree] = useState('0');
  const [gain, setGain] = useState('0');
  const [loss, setLoss] = useState('0');

  const handleEqual = () => {
    var temp1 = 0;

    if (valueThree == '0' || valueThree == '') {
      temp1 = 1 / ((1 / Number(valueOne)) + (1 / Number(valueTwo)));
    } else {
      temp1 = 1 / ((1 / Number(valueOne)) + (1 / Number(valueTwo)) + (1 / Number(valueThree)));
      setAmountThree(String((1 / Number(valueThree)) * temp1 * Number(totalValue)))
    }

    setAmountOne(String((1 / Number(valueOne)) * temp1 * Number(totalValue)))
    setAmountTwo(String((1 / Number(valueTwo)) * temp1 * Number(totalValue)))

    setGain(String((Number(valueOne) * ((1 / Number(valueOne)) * temp1 * Number(totalValue))) - Number(totalValue)))

    setLoss(String(100 * ((Number(valueOne) * ((1 / Number(valueOne)) * temp1 * Number(totalValue))) - Number(totalValue)) / Number(totalValue)))


    setResult('10')
  };


  return (
    <>
      <div className="login-box">

        <div className="user-box">
          <input
            value={valueOne}
            onChange={e => setValueOne((e.target.value))}
            type="number"
            placeholder="Cuota 1" />
          <label>Cuota 1: </label>

        </div>

        <div className="user-box">
          <input
            value={valueTwo}
            onChange={e => setValueTwo((e.target.value))}
            type="number"
            placeholder="Cuota 2" />
          <label>Cuota 2: </label>
        </div>

        <div className="user-box">
          <input
            value={valueThree}
            onChange={e => setValueThree((e.target.value))}
            type="number"
            placeholder="Cuota 3" />
          <label>Cuota 3: </label>
        </div>

        <div className="user-box">
          <input
            value={totalValue}
            onChange={e => setTotalValue((e.target.value))}
            type="number"
            placeholder="Tamaño total de la apuesta" />
          <label>Tamaño total de la apuesta: </label>
        </div>




        <button className="submit" onClick={handleEqual}> Calcular</button> <br />
        <br />
        {Number(loss) != 0 &&
          <>
            <p>Cantidad 1: {parseFloat((amountOne)).toFixed(2)}</p>
            <p>Cantidad 2: {parseFloat((amountTwo)).toFixed(2)}</p>
            {Number(valueThree) > 0 &&
              <>
                <p>Cantidad 3: {parseFloat((amountThree)).toFixed(2)}</p>
              </>
            }
            <div />

            <p>Beneficio:  <span style={(Number(gain) < 0) ? { color: 'red' } : { color: 'green' }} >{parseFloat((gain)).toFixed(2)} </span>

              %  <span style={(Number(loss) < 0) ? { color: 'red' } : { color: 'green' }} >{parseFloat((loss)).toFixed(2)} </span> </p>

          </>
        }
      </div>
    </>
  );
}

