import React from 'react';
import Button from '../common/Button';
import { I_Hackathon } from '../../types/Hackathon';
import { Status } from '../../enum';
import { convertToDaysHoursMinutes, formatDate, I_Date } from '../../utils/convertDate';
import { Link } from 'react-router-dom';

interface I_HackathonCard {
    hackathon: I_Hackathon;
}

const HackathonCard: React.FC<I_HackathonCard> = ({ hackathon }) => {

    const getHackathonTime = (): I_Date => {
        if (hackathon.status === Status.Upcoming) {
            return convertToDaysHoursMinutes(hackathon.startDate);
        } else if (hackathon.status === Status.Active) {
            return convertToDaysHoursMinutes(hackathon.endDate);
        } else if (hackathon.status === Status.Past) {
            return convertToDaysHoursMinutes(hackathon.endDate);
        }

        return convertToDaysHoursMinutes(hackathon.endDate);
    }

    const hackathonTimeHeading = () => {
        if (hackathon.status === Status.Upcoming) {
            return "Start in";
        } else if (hackathon.status === Status.Active) {
            return "Ends in";
        } else if (hackathon.status === Status.Past) {
            return "Ended on";
        }
    }

    const hackathonTime: I_Date | string = hackathon.status !== Status.Past ? getHackathonTime() : formatDate(hackathon.endDate);

    return (
        <Link to={`/hackathon/${hackathon.id}`}>
            <div className='bg-White rounded-2xl w-full'>
                <div>
                    <img src={hackathon.image} className='rounded-t-2xl w-full max-h-80' />
                </div>
                <div className='p-5 flex flex-col justify-center'>
                    <div className="flex justify-center">
                        <div className={`inline-block text-center font-medium rounded px-4 py-1 text-sm uppercase ${hackathon.status === Status.Active && "bg-Green/20"} ${hackathon.status === Status.Upcoming && "bg-Yellow/20"} ${hackathon.status === Status.Past && "bg-Red/20"}`}>
                            {hackathon.status}
                        </div>
                    </div>
                    <div className='text-xl font-medium text-center my-5'>
                        {hackathon.name}
                    </div>
                    <div className='inline-block mx-auto'>
                        <div className='text-Gray font-medium text-lg text-center'>{hackathonTimeHeading()}</div>
                        {hackathon.status === Status.Upcoming || hackathon.status === Status.Active ?
                            <div className='flex items-center gap-3'>
                                <div className='flex flex-col items-center justify-center'>
                                    <div className='text-2xl text-Gray font-semibold'>{typeof (hackathonTime) === "object" && hackathonTime.days}</div>
                                    <div className='text-sm text-Gray/80'>Days</div>
                                </div>
                                <span className='font-semibold text-3xl text-Gray'>:</span>
                                <div className='flex flex-col items-center justify-center'>
                                    <div className='text-2xl text-Gray font-semibold'>{typeof (hackathonTime) === "object" && hackathonTime.hours}</div>
                                    <div className='text-sm text-Gray/80'>Hours</div>
                                </div>
                                <span className='font-semibold text-3xl text-Gray'>:</span>
                                <div className='flex flex-col items-center justify-center'>
                                    <div className='text-2xl text-Gray font-semibold'>{typeof (hackathonTime) === "object" && hackathonTime.minutes}</div>
                                    <div className='text-sm text-Gray/80'>Mins</div>
                                </div>
                            </div> :
                            <div className='text-2xl text-Gray font-semibold pt-4'>
                                {hackathonTime.toString()}
                            </div>
                        }
                    </div>
                    <div className='inline-block mx-auto'>
                        <Button text='Participate Now' onClick={() => { }} className='bg-LightGreen rounded-md px-8 py-2 text-White text-lg font-semibold mt-5' type='button' />
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default HackathonCard