import React, {useEffect, useState} from 'react';
import './App.css';
import {Button} from "./Button/Button";
import {SettingsComponents} from "./SettingsComponents/SettingsComponents";
import {CounterComponents} from "./CounterComponents/CounterComponents";

function App() {

    const maxValue = Number(localStorage.getItem('counterValueMax'))
    const startValue = Number(localStorage.getItem('counterValueStart'))

    const [max, setMax] = useState(maxValue)
    const [start, setStart] = useState(startValue)
    let [counter, setCounter] = useState(0)

    const setToLocalStorage = () => {
        localStorage.setItem('counterValueMax', JSON.stringify(max))
        localStorage.setItem('counterValueStart', JSON.stringify(start))
    }



    const incCounter = () => {
        setCounter(++counter)
    }

    const resetCounter = () => {
        setCounter(0)
    }

    const setMaxValue = (maxValue: number) => {
        setMax(maxValue)
    }

    const setMinValue = (minValue: number) => {
        setStart(minValue)
    }

    return (
        <div className="App">
            <div className='settings'>
                <SettingsComponents
                    start={start}
                    max={max}
                    setMaxValue={setMaxValue}
                    setMinValue={setMinValue}
                />
                <Button name={'Set'} callback={setToLocalStorage}/>
            </div>
            <div>
                <CounterComponents counter={counter}
                                   resetCounter={resetCounter}
                                   max={max}
                                   start={start}
                                   incCounter={incCounter}
                />
            </div>
        </div>
    );
}

export default App;
