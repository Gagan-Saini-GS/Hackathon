import React from "react";

interface I_TextArea {
    type: string;
    name: string;
    value: string;
    onChange: (e: any) => void;
    placeholder: string;
    className?: string;
    errorMessage?: string;
    readOnly?: boolean;
    rows?: number;
}

export const TextArea: React.FC<I_TextArea> = ({
    name,
    value,
    onChange,
    placeholder,
    className,
    errorMessage,
    rows = 5,
}) => {

    return (
        <div className="flex flex-col gap-1">
            <textarea
                rows={rows}
                className={`${className} `}
                style={
                    errorMessage
                        ? {
                            border: "1px solid red",
                        }
                        : undefined
                }
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
            ></textarea>
            {errorMessage && (
                <span className="text-Red/80 text-sm">{errorMessage}</span>
            )}
        </div>
    );
};
