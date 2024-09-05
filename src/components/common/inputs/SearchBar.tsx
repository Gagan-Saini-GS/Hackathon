import React from 'react';
import { CiSearch } from "react-icons/ci";
import { Input } from './Input';

interface I_SearchBar {
    searchText: string;
    setSearchText: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBar: React.FC<I_SearchBar> = ({ searchText, setSearchText }) => {

    return (
        <div className='flex bg-White rounded-md p-2 items-center w-full'>
            <CiSearch className='w-5 h-5 mr-4 text-Gray/80' />
            <Input
                type='search'
                name='search'
                value={searchText}
                onChange={(e) => { setSearchText(e.target.value) }}
                placeholder='Search'
                className='outline-none bg-White w-full'
            />
        </div>
    )
}

export default SearchBar