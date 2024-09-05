import React from "react";
import { I_DataArray } from "../../../types/DataArrayTypes";

const HeroSectionCard = ({ option }: { option: I_DataArray }) => {
    return (<>
        <div key={option.id} className="flex items-center space-x-2">
            <div className='mr-5'>
                <img src={option.image} />
            </div>
            <div>
                <h3 className="text-White text-xl font-bold">{option.heading}</h3>
                <p className="text-White/80">{option.subheading}</p>
            </div>
        </div>
    </>);
}

export default HeroSectionCard;