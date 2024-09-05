import React from "react";

interface I_Input {
    type: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
    className?: string;
    errorMessage?: string;
    readOnly?: boolean;
}

export const Input: React.FC<I_Input> = ({
    type,
    name,
    value,
    onChange,
    placeholder,
    className,
    errorMessage,
    readOnly = false,
}) => {

    return (
        <div className="w-full flex flex-col gap-1">
            <input
                className={`${className}`}
                style={
                    errorMessage
                        ? {
                            border: "1px solid red",
                        }
                        : undefined
                }
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                readOnly={readOnly}
            />
            {errorMessage && (
                <span className="text-Red/80 text-sm">{errorMessage}</span>
            )}
        </div>
    );
};
