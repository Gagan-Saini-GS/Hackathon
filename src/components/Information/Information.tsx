import React from 'react';
import { InformationCard } from './InformationCard';
import { InformationCardData } from '../../constants';


const Information = () => {
    return (
        <div className='py-20 px-52 bg-White'>
            <div className='text-center text-4xl font-semibold mb-10'>Why Participate in <span className='text-LightGreen'>AI Challenges?</span></div>
            <div className='grid grid-cols-2 grid-rows-2 gap-5 items-stretch'>
                {InformationCardData.map((card) => (
                    <InformationCard card={card} />
                ))}
            </div>
        </div>
    )
}

export default Information