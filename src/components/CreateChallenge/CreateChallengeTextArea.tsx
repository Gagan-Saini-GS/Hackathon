import { TextArea } from "../common/inputs/TextArea";

interface I_ChallengeTextArea {
    label: string;
    name: string;
    value: string;
    placeholder: string;
    type: string;
    className?: string;
    errorMessage?: string;
    onClick: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const CreateChallengeTextArea: React.FC<I_ChallengeTextArea> = ({ label, name, value, placeholder, type, className, errorMessage, onClick }) => {
    return (
        <div className='mb-10'>
            <div className='mb-1 text-lg'>{label}</div>
            <TextArea
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