import React from 'react'
import HeroSection from './common/HeroSection/HeroSection'
import Information from './Information/Information'
import HackathonDetails from './Hackathon/HackathonDetails'

const Home = () => {
    return (
        <div>
            <HeroSection />
            <Information />
            <HackathonDetails />
        </div>
    )
}

export default Home