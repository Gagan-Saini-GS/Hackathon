import React, { useEffect, useState } from "react";
import { FiltersData } from "../../../constants";

interface I_FilterBox {
    filterHackathons: (levels: string[], status: string[]) => void;
}

export const FilterBox: React.FC<I_FilterBox> = ({ filterHackathons }) => {
    const [selectedStatus, setSelectedStatus] = useState<string[]>([]);
    const [selectedLevels, setSelectedLevels] = useState<string[]>([]);

    useEffect(() => {
        filterHackathons(selectedLevels, selectedStatus);
    }, [selectedStatus, selectedLevels]);

    return (
        <div className='absolute left-0 bg-White w-full min-w-56 p-2 rounded-b-md'>
            {FiltersData.map((filterItem) => {
                return (
                    <div className='w-full border-t border-Gray/30 py-2'>
                        <div className='pb-2'>
                            {filterItem.name}
                        </div>
                        <div className='flex flex-col gap-2'>
                            {filterItem.options.map((option) => (
                                <div className='flex items-center'>
                                    <input
                                        type='checkbox'
                                        className='w-5 h-5 mr-2'
                                        onChange={(e) => {
                                            if (filterItem.id === "status") {
                                                setSelectedStatus((prev) => {
                                                    if (e.target.checked) {
                                                        return [...prev, option.value];
                                                    } else {
                                                        return prev.filter(status => status !== option.value);
                                                    }
                                                })
                                            } else if (filterItem.id === "level") {
                                                setSelectedLevels((prev) => {
                                                    if (e.target.checked) {
                                                        return [...prev, option.value];
                                                    } else {
                                                        return prev.filter(level => level !== option.value);
                                                    }
                                                })
                                            }
                                        }}
                                    />
                                    <div className='text-sm'>
                                        {option.value}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}