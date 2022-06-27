import React, {ChangeEvent} from "react";
import classes from './SettingsComponents.module.css'

type SettingsComponentsType = {
    setMaxValue: (maxValue: number) => void
    setMinValue: (minValue: number) => void
    max: number
    start: number
}

export const SettingsComponents = (props: SettingsComponentsType) => {
    const maxHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const maxValue = Number(e.currentTarget.value)
        props.setMaxValue(maxValue)
    }

    const minHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const minValue = Number(e.currentTarget.value)
        props.setMinValue(minValue)
    }

    return(
            <div className='inputSettings'>
                <div>
                    <div className={classes.textStyle}>
                        max:
                    </div>
                    <div>
                        <input
                            value={props.max}
                            type='number'
                            onChange={maxHandler}
                        />
                    </div>
                </div>
                <div>
                    <div className={classes.textStyle}>
                        start:
                    </div>
                    <div>
                        <input
                        value={props.start}
                        type='number'
                        onChange={minHandler}
                    />
                    </div>
                </div>
        </div>
    )
}