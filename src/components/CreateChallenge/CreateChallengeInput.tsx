import { Input } from "../common/inputs/Input";

interface I_ChallengeInput {
    label: string;
    name: string;
    value: string;
    placeholder: string;
    type: string;
    className?: string;
    errorMessage?: string;
    onClick: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const CreateChallengeInput: React.FC<I_ChallengeInput> = ({ label, name, value, placeholder, type, className, errorMessage, onClick }) => {
    return (
        <div className='mb-10'>
            <div className='mb-1 text-lg'>{label}</div>
            <Input
                type={type}
                name={name}
                value={value}
                onChange={onClick}
                className={`${className} outline-none bg-White w-96 p-2 rounded-md border-2 border-Gray/50`}
                placeholder={placeholder}
                errorMessage={errorMessage}
            />
        </div>
    )
};