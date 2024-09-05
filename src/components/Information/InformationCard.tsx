import { I_DataArray } from "../../types/DataArrayTypes";

interface I_InformationCard {
    card: I_DataArray;
}

export const InformationCard: React.FC<I_InformationCard> = ({ card }) => {
    return (
        <>
            <div key={card.id} className="bg-OffWhite rounded-md px-5 py-10">
                <div className='mb-5'>
                    <img src={card.image} />
                </div>
                <div>
                    <h3 className="text-xl font-bold mb-2">{card.heading}</h3>
                    <p className="text-Gray">{card.subheading}</p>
                </div>
            </div>
        </>
    );
}