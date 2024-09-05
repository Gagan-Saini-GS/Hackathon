import React from "react";
import { I_Button } from "../../types/ButtonTypes";


const Button: React.FC<I_Button> = ({ type, onClick, text, className, disabled = false }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={className}
            disabled={disabled}
        >
            {text}
        </button>
    )
}

export default Button