import React, { SetStateAction, useRef } from 'react'
import uploadImage from '../../../utils/uploadImage';
import CloudUpload from '../../../assets/icons/bxs_cloud-upload.svg';
import Button from '../Button';

interface I_ImageInput {
    challengeImage: string;
    setChallengeImage: React.Dispatch<SetStateAction<string>>;
    errorMessage?: string;
}

const ImageInput: React.FC<I_ImageInput> = ({ challengeImage, setChallengeImage, errorMessage }) => {
    const fileInputRef = useRef<HTMLInputElement>(null);

    return (
        <div className='mb-10 relative'>
            <div className='mb-1 text-lg'>Image <span className={challengeImage !== "" ? "inline" : "hidden"}>(Uploaded)</span></div>
            <div
                className={`w-96 rounded-xl absolute top-10 left-0`}
            >
                <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    id="hackathon-image"
                    multiple={false}
                    ref={fileInputRef}
                    onChange={(event) => {
                        uploadImage(event).then((res: any) => setChallengeImage(res?.[0]));
                    }}
                />
            </div>
            <div className='flex flex-col gap-1'>
                <Button
                    text={
                        <div className='flex justify-center items-center'>
                            <div className='mr-2'>Upload</div>
                            <img src={CloudUpload} />
                        </div>
                    }
                    onClick={() => fileInputRef.current?.click()}
                    type='button'
                    className={`outline-none bg-White px-4 py-2 w-96 rounded-md ${errorMessage ? "border border-Red" : "border-2 border-Gray/50"}`}
                />
                {errorMessage && <span className="text-Red/80 text-sm">{errorMessage}</span>}
            </div>
        </div>
    )
}

export default ImageInput