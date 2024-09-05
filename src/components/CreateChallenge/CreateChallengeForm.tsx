import useForm from '../../hooks/useForm';
import { HackathonLevel } from '../../enum';
import Button from '../common/Button';
import { CreateChallengeInput } from './CreateChallengeInput';
import { CreateChallengeTextArea } from './CreateChallengeTextArea';
import SelectInput from '../common/inputs/SelectInput';
import ImageInput from '../common/inputs/ImageInput';
import { useEffect, useState } from 'react';
import { challengeFormValidations, initailChallengeForm } from './ChallengeDetails';
import { useHackathons } from '../../contexts/HackathonContext';
import { I_Hackathon } from '../../types/Hackathon';
import { v4 as uuidv4 } from 'uuid';
import { getHackathonStatus } from '../../utils/getHackathonStatus';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';

export interface I_ChallengeForm {
    challengeName: string;
    startDate: string;
    endDate: string;
    description: string;
    image: string;
    level: HackathonLevel;
}


const CreateChallengeForm = ({ hackathonId }: { hackathonId: string }) => {
    const navigate = useNavigate();
    const { hackathons, addHackathon, updateHackathon } = useHackathons();

    const {
        formData,
        setFormData,
        errors,
        setErrors,
        handleChange,
        handleSubmit
    } = useForm<I_ChallengeForm>(
        initailChallengeForm,
        challengeFormValidations,
        () => {
            if (hackathonId) {
                const hackathon: I_Hackathon = {
                    id: hackathonId,
                    name: formData.challengeName,
                    startDate: formData.startDate,
                    endDate: formData.endDate,
                    image: formData.image,
                    level: formData.level,
                    status: getHackathonStatus(formData.startDate, formData.endDate),
                    description: formData.description,
                }
                updateHackathon(hackathon);

                swal("Update Hackathon", "Are you sure you want to update this hackathon?", "info").then(() => {
                    setFormData(initailChallengeForm);
                    setChallengeImage("");
                    navigate(`/hackathon/${hackathonId}`);
                });
            } else {
                // Add Hackathon
                const hackathon: I_Hackathon = {
                    id: uuidv4(),
                    name: formData.challengeName,
                    startDate: formData.startDate,
                    endDate: formData.endDate,
                    image: formData.image,
                    level: formData.level,
                    status: getHackathonStatus(formData.startDate, formData.endDate),
                    description: formData.description,
                }

                addHackathon(hackathon);
                swal("Congratulations", "Your Hackathon is created successfully", "success").then(() => {
                    setFormData(initailChallengeForm);
                    setChallengeImage("");
                    navigate("/");
                });
            }
        }
    );

    useEffect(() => {
        if (hackathonId) {
            const existedHackathon: I_Hackathon = hackathons.filter((hackathon) => hackathon.id === hackathonId)[0];
            const hackathon: I_ChallengeForm = {
                challengeName: existedHackathon.name,
                startDate: existedHackathon.startDate,
                endDate: existedHackathon.endDate,
                image: existedHackathon.image,
                level: existedHackathon.level,
                description: existedHackathon.description,
            }

            setFormData(hackathon);
            setChallengeImage(hackathon.image);
        }
    }, [hackathonId]);


    const [challengeImage, setChallengeImage] = useState<string>("");

    useEffect(() => {
        setFormData((prev) => ({ ...prev, image: challengeImage }));
        setErrors((prev) => ({ ...prev, image: undefined }));
    }, [challengeImage]);


    return (
        <div className='flex flex-col gap-5'>
            <form onSubmit={handleSubmit}>
                <CreateChallengeInput
                    label='Challenge Name'
                    type='text'
                    name='challengeName'
                    value={formData.challengeName}
                    placeholder='Enter Challenge Name'
                    onClick={handleChange}
                    errorMessage={errors.challengeName}
                />
                <CreateChallengeInput
                    label='Start Date'
                    type='datetime-local'
                    name='startDate'
                    value={formData.startDate}
                    placeholder='Enter Start Date'
                    onClick={handleChange}
                    errorMessage={errors.startDate}
                />
                <CreateChallengeInput
                    label='End Date'
                    type='datetime-local'
                    name='endDate'
                    value={formData.endDate}
                    placeholder='Enter End Date'
                    onClick={handleChange}
                    errorMessage={errors.endDate}
                />
                <CreateChallengeTextArea
                    label='Description'
                    type='text'
                    name='description'
                    value={formData.description}
                    placeholder='Enter Challenge Description'
                    onClick={handleChange}
                    errorMessage={errors.description}
                />
                <div className="relative">
                    <ImageInput
                        challengeImage={challengeImage}
                        setChallengeImage={setChallengeImage}
                        errorMessage={errors.image}
                    />
                </div>
                <SelectInput
                    label='Level Type'
                    name="level"
                    value={formData.level}
                    options={[
                        { label: "Easy", value: HackathonLevel.Easy },
                        { label: "Medium", value: HackathonLevel.Medium },
                        { label: "Hard", value: HackathonLevel.Hard }
                    ]}
                    handleChange={handleChange}
                    className='outline-none bg-White w-96 p-2 rounded-md border-2 border-Gray/50'
                />
                <Button
                    text={hackathonId ? 'Save' : 'Create Challenge'}
                    type='submit'
                    onClick={() => { }}
                    className='bg-LightGreen rounded-md px-8 py-2 text-White text-lg font-semibold mt-5'
                />
            </form>
        </div>
    )
}

export default CreateChallengeForm