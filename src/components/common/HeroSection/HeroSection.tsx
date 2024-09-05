import React from 'react';
import Button from '../Button';
import RocketImage from "../../../assets/icons/rocket.svg";
import { useNavigate } from 'react-router-dom';
import { HeroSectionOptions } from '../../../constants';
import HeroSectionCard from './HeroSectionCard';


const HeroSection = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className='bg-PrimaryGreen/90 py-16 px-52 flex items-center justify-between'>
                <div className='w-3/5'>
                    <div className="text-5xl text-White font-semibold mb-10">Accelerate Innovation with Global AI Challenges</div>
                    <div className='text-lg text-White mb-10'>
                        AI Challenges at DPhi simulate real-world problems. It is a great place to put your AI/Data Science skills to test on diverse datasets allowing you to foster learning through competitions.
                    </div>
                    <Button
                        type='button'
                        text='Create Challenge'
                        onClick={() => { navigate("/create-challenge") }}
                        className='bg-White text-PrimaryGreen text-lg font-semibold rounded-lg px-4 py-2'
                    />
                </div>
                <div className='w-2/5'>
                    <img src={RocketImage} className='ml-16' />
                </div>
            </div>
            <div className='bg-PrimaryGreen px-52 py-12 grid grid-cols-3 gap-5 items-center'>
                {HeroSectionOptions.map((option) => (
                    <HeroSectionCard option={option} />
                ))}
            </div>
        </>
    )
}

export default HeroSection