import React from "react";
import classes from './CounterComponents.module.css'
import {Button} from "../Button/Button";

type CounterComponentsType = {
    incCounter: () => void
    resetCounter: () => void
    max: number
    start: number
    counter: number
}

export const CounterComponents = (props: CounterComponentsType) => {

    const incCounterHandler = () => {
        props.incCounter()
    }

    const resetCounterHandler = () => {
        props.resetCounter()
    }

    const score = props.max === props.start ||
        props.max < props.start ||
        props.start < 0 ? 'Incorrect Value' : props.counter

    return (
        <div className={classes.counter}>
            <div className={props.max === props.counter ? classes.errorValue : classes.counterValue}>
                {score}
            </div>
            <div className={classes.buttonBlock}>
                <Button disabled={props.max === props.counter} name={'Inc'} callback={incCounterHandler}/>
                <Button name={'Reset'} callback={resetCounterHandler}/>
            </div>
        </div>
    )
}