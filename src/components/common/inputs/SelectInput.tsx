import React from 'react';
import { HackathonLevel } from '../../../enum';

interface I_SelectInput {
    label: string;
    name: string;
    value: HackathonLevel,
    options: any;
    handleChange: any;
    className: string;
}


const SelectInput: React.FC<I_SelectInput> = ({ label, name, value, options, handleChange, className }) => {
    return (
        <div className='mb-10'>
            <div className='mb-1 text-lg'>{label}</div>
            <select name={name} value={value} onChange={handleChange} className={`${className}`} style={{
                "width": "384px",
                "border": "2px solid rgb(100 96 125 / 0.5)",
                "borderRadius": "6px",
                "padding": "8px",
                "backgroundColor": "rgb(240 243 246 / var(--tw-bg-opacity))"
            }}>
                {options.map((option: any) => {
                    return (
                        <option
                            key={option.value}
                            className={`${className}`}
                            value={option.value}
                        >
                            {option.label}
                        </option>
                    );
                })}
            </select>
        </div>
    )
}

export default SelectInput