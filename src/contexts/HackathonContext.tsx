import React, { createContext, useContext, useState } from 'react';
import { I_Hackathon } from '../types/Hackathon';

interface HackathonContextType {
    hackathons: I_Hackathon[];
    addHackathon: (hackathon: I_Hackathon) => void;
    deleteHackathon: (id: string) => void;
    updateHackathon: (updatedHackathon: I_Hackathon) => void;
}

const HackathonContext = createContext<HackathonContextType | undefined>(undefined);

export const useHackathons = () => {
    const context = useContext(HackathonContext);
    if (!context) {
        throw new Error("useHackathons must be used within a HackathonProvider");
    }
    return context;
};

export const HackathonProvider: React.FC<any> = ({ children }) => {
    const [hackathons, setHackathons] = useState<I_Hackathon[]>([]);

    const addHackathon = (hackathon: I_Hackathon) => {
        setHackathons((prev) => [...prev, hackathon]);
    };

    const deleteHackathon = (id: string) => {
        setHackathons((prev) => prev.filter(hackathon => hackathon.id !== id));
    };


    const updateHackathon = (updatedHackathon: I_Hackathon) => {
        setHackathons((prev) =>
            prev.map(hackathon =>
                hackathon.id === updatedHackathon.id ? updatedHackathon : hackathon
            )
        );
    };

    return (
        <HackathonContext.Provider value={{ hackathons, addHackathon, deleteHackathon, updateHackathon }}>
            {children}
        </HackathonContext.Provider>
    );
};
