import React, {useState} from 'react';
import './App.css';
import {Button} from "./Button/Button";
import {SettingsComponents} from "./SettingsComponents/SettingsComponents";
import {CounterComponents} from "./CounterComponents/CounterComponents";

function App() {

    const [max, setMax] = useState(0)
    const [start, setStart] = useState(0)
    let [counter, setCounter] = useState(0)

    const setToLocalStorageMax = () => {
        localStorage.setItem('counterValueMax', JSON.stringify(max)) // преобразовывает в стринг
    }

    const setToLocalStorageMStart = () => {
        localStorage.setItem('counterValueStart', JSON.stringify(start)) // преобразовывает в стринг
    }

    const setLocalStorage = () => {
        setToLocalStorageMStart()
        setToLocalStorageMax()
    }

    const getToLocalStorageMax = () => {
        let valueString = localStorage.getItem('counterValueMax')
        if (valueString) {
            let newValue = JSON.parse(valueString)
            debugger
            setMax(newValue)
        }
    }

    const getToLocalStorageStart = () => {
        let valueString = localStorage.getItem('counterValueStart')
        if (valueString) {
            let newValue = JSON.parse(valueString)
            debugger
            setMax(newValue)
        }
    }

    const getLocalStorage = () => {
        getToLocalStorageMax()
        getToLocalStorageStart()
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
                <Button name={'Set'} callback={setLocalStorage}/>
                <Button name={'Get'} callback={getLocalStorage}/>
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
