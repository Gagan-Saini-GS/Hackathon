import HackathonCard from './HackathonCard';
import SearchBar from '../common/inputs/SearchBar';
import Filters from '../common/Filter/Filters';
import { useHackathons } from "../../contexts/HackathonContext";
import Button from '../common/Button';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { I_Hackathon } from '../../types/Hackathon';
import { Status } from '../../enum';


const HackathonDetails = () => {
    const { hackathons: allHackathons } = useHackathons();
    const navigate = useNavigate();

    const [hackathons, setHackathons] = useState<I_Hackathon[]>([...allHackathons]);
    const [searchText, setSearchText] = useState<string>("");

    useEffect(() => {
        if (searchText === "") {
            setHackathons(allHackathons);
        }
        else {
            setHackathons(allHackathons.filter((hackathon) => hackathon.name.toLowerCase().includes(searchText.toLowerCase())));
        }
    }, [searchText]);

    const filterHackathons = (levels: string[], status: string[]) => {
        if ((levels.length === 0 && status.length === 0) || status.includes(Status.All)) {
            setHackathons(allHackathons);
            return;
        }

        const filteredHackathonsByStatus = allHackathons.filter((hackathon) => {
            return status.includes(hackathon?.status || "");
        });

        const filteredHackathonsByLevel = allHackathons.filter((hackathon) => {
            return levels.includes(hackathon.level);
        });

        if (JSON.stringify(filteredHackathonsByLevel.map(hackathon => hackathon.id)) === JSON.stringify(filteredHackathonsByStatus.map(hackathon => hackathon.id))) {
            setHackathons(filteredHackathonsByLevel);
            return;
        }

        setHackathons([...filteredHackathonsByLevel, ...filteredHackathonsByStatus]);
    };


    return (
        <div className='px-52 py-20 bg-PrimaryGreen w-full'>
            <div className='mb-10 w-full flex flex-col justify-center items-center'>
                <div className='text-3xl text-White font-semibold text-center mb-5'>Explore Chanllenges</div>
                <div className='flex gap-4 justify-center w-3/5'>
                    <div className='w-4/5'>
                        <SearchBar
                            searchText={searchText}
                            setSearchText={setSearchText}
                        />
                    </div>
                    <div className='w-1/5'>
                        <Filters
                            filterHackathons={filterHackathons}
                        />
                    </div>
                </div>
            </div>
            {hackathons.length === 0 ?
                (
                    <div className='w-full flex flex-col justify-center'>
                        <div className='inline-block mx-auto'>
                            <div className='text-White text-3xl font-semibold mb-5 px-10 text-center'>No Hackathons are there!</div>
                            <Button
                                type='button'
                                text='Create Challenge'
                                onClick={() => { navigate("/create-challenge") }}
                                className='bg-White text-PrimaryGreen text-lg font-semibold rounded-lg px-4 py-2 w-full'
                            />
                        </div>
                    </div>
                )
                :
                (
                    <div className='grid grid-cols-3 gap-8 items-stretch'>
                        {hackathons.map((hackathon) => (
                            <HackathonCard hackathon={hackathon} />
                        ))}
                    </div>
                )
            }
        </div>
    )
}

export default HackathonDetails