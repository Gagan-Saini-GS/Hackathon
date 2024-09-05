import { useParams } from 'react-router-dom';
import CreateChallengeForm from './CreateChallengeForm';

const CreateChallenge = () => {
    const { hackathonId } = useParams();

    return (
        <div>
            <div className='px-20 py-5 bg-OffWhite font-medium text-2xl'>Challenge Details</div>
            <div className='px-20 py-5'>
                <CreateChallengeForm hackathonId={hackathonId || ""} />
            </div>
        </div>
    )
}

export default CreateChallenge