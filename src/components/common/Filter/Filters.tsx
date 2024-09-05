import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { FilterBox } from "./FilterBox";

interface I_Filters {
    filterHackathons: (levels: string[], status: string[]) => void;
}


const Filters: React.FC<I_Filters> = ({ filterHackathons }) => {
    const [showFilters, setShowFilters] = useState<boolean>(false);

    return (
        <div className={`bg-White rounded-md p-2 relative w-full ${showFilters && 'min-w-56'}`}>
            <div className={`flex items-center justify-between cursor-pointer`} onClick={() => setShowFilters(!showFilters)}>
                <div className='text-center'>Filters</div>
                <IoIosArrowDown className={`w-5 h-5 text-Gray/80 ${showFilters && 'rotate-180'}`} />
            </div>
            {showFilters &&
                <FilterBox
                    filterHackathons={filterHackathons}
                />
            }
        </div>
    )
}

export default Filters;