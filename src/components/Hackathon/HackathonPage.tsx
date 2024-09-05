import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useHackathons } from '../../contexts/HackathonContext';
import { I_Hackathon } from '../../types/Hackathon';
import { formatDate } from '../../utils/convertDate';
import {
    MdOutlineAccessTime,
    MdOutlineSignalCellularAlt1Bar,
    MdOutlineSignalCellularAlt2Bar,
    MdOutlineSignalCellularAlt
} from "react-icons/md";
import { HackathonLevel } from '../../enum';
import Button from '../common/Button';

const today = new Date();

const HackathonPage = () => {
    const navigate = useNavigate();
    const { hackathonId } = useParams();
    const { hackathons, deleteHackathon } = useHackathons();

    const [hackathonDetails, setHackathonDetails] = useState<I_Hackathon>();

    useEffect(() => {
        const selectedHackathon = hackathons.filter((hackathon) => hackathon.id === hackathonId);
        setHackathonDetails(selectedHackathon[0]);
    }, [hackathons]);

    const getHeading = (): string => {
        const startDate = new Date(hackathonDetails?.startDate || "");
        const endDate = new Date(hackathonDetails?.endDate || "");

        if (startDate > today) {
            return "Start on";
        } else if (startDate <= today && endDate >= today) {
            return "Ends on";
        } else {
            return "Ended on";
        }
    }

    const getDate = (): string => {
        const startDate = new Date(hackathonDetails?.startDate || "");
        if (startDate > today) {
            return formatDate(hackathonDetails?.startDate || "");
        } else {
            return formatDate(hackathonDetails?.endDate || "");
        }
        return "";
    }

    const getLevelIcon = (): React.ReactNode => {
        if (hackathonDetails?.level === HackathonLevel.Easy) return <MdOutlineSignalCellularAlt1Bar className='w-5 h-5' />;
        else if (hackathonDetails?.level === HackathonLevel.Medium) return <MdOutlineSignalCellularAlt2Bar className='w-5 h-5' />;
        else return <MdOutlineSignalCellularAlt className='w-5 h-5' />;
    }

    return (
        <div>
            <div className='bg-PrimaryGreen/90 py-16 px-52 flex items-center justify-between'>
                <div className='w-1/2'>
                    <div className='bg-Yellow rounded-md font-bold py-2 px-8 flex items-center mb-5'>
                        <MdOutlineAccessTime className='w-5 h-5 mr-2 font-bold' /> {getHeading()} {getDate()} (Indian Standard Time)
                    </div>
                    <div className='text-5xl text-White font-semibold mb-10'>{hackathonDetails?.name}</div>
                    <div className='text-lg text-White mb-10'>
                        Identify the class to which each butterfly belongs to.
                    </div>
                    <div className='inline-block bg-OffWhite rounded-md font-medium px-4 py-2 mt-5'>
                        <div className='flex items-center gap-1'>
                            <span>{getLevelIcon()}</span>
                            <span className='text-PrimaryGreen'>{hackathonDetails?.level}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='px-52 pt-4 bg-OffWhite shadow-lg flex justify-between items-center'>
                <div className='inline-block text-PrimaryGreen text-lg font-semibold border-b-4 px-4 py-2 border-Green/80'>Overview</div>
                <div className='flex items-center gap-2'>
                    <Button
                        type='button'
                        text='Edit'
                        onClick={() => { navigate(`/create-challenge/${hackathonDetails?.id}`) }}
                        className='rounded-lg px-4 py-1 border-2 border-Green/90 bg-Green/90 text-White text-lg font-semibold relative -top-2'
                    />
                    <Button
                        type='button'
                        text='Delete'
                        onClick={() => {
                            deleteHackathon(hackathonDetails?.id || "");
                            navigate("/");
                        }}
                        className='rounded-lg px-4 py-1 border-2 border-Red/80 bg-White text-Red/80 text-lg font-semibold relative -top-2'
                    />
                </div>
            </div>
            <div className='px-52 py-8 text-Gray/80 font-medium text-lg'>
                {hackathonDetails?.description}
            </div>
        </div>
    );
}

export default HackathonPage;