import React from "react";
import classes from './Button.module.css'

type ButtonType = {
    name: string
    callback: ()=> void
    disabled?: boolean
}

export const Button = (props: ButtonType) => {

    const onClickHandler = () => {
        props.callback()
    }

    return(
        <div className={classes.buttonSet}>
            <button disabled={props.disabled} onClick={onClickHandler}>{props.name}</button>
        </div>
    )
}