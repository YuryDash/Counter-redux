import React from "react";
import s from "./SuperButton.module.css"

type ButtonPropsType = {
    callback: () => void
    btnText: string
    enabled?: boolean
}
export const SuperButton: React.FC<ButtonPropsType> = ({
                                                           callback,
                                                           btnText,
                                                           enabled
                                                       }) => {

    return (
        // <button className={s.btn} onClick={callback} disabled={disabled}>{btnText}</button>
        <button className={enabled ? s.btn : s.disabled} onClick={callback} >{btnText}</button>
    )

}