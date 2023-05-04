'use client';
import { useArmor } from "@/hooks/useArmor";
import { useEffect, useState } from "react";
import { BoxItem } from "./BoxItem";
import { IArmor } from "@/interfaces";

export default function Armors() {
    const { armors, getAll } = useArmor();
    const [filteredArmors, setFilteredArmors] = useState<IArmor[]>();
    const [offset, setOffset] = useState<number>(0);

    console.log(armors);
    useEffect(() => {
        getAll(offset, (offset * 100) + 100);
    }, [getAll, offset])

    const handleChange = (value: string) => {
        const filtered = armors?.filter(armor => armor.name.toLowerCase().includes(value.toLowerCase()));
        setFilteredArmors(filtered);
    }

    const handleOffset = (signal: string) => {
        if (offset < 5 && offset > 0) {
            signal === '+' ? setOffset(offset + 1) : setOffset(offset - 1);
        }
        if (offset === 5 && signal === '-') {
            setOffset(offset - 2)
        } else if (offset === 0 && signal === '+') {
            setOffset(offset + 1)
        }
    }

    return (
        <div className="flex flex-col justify-center items-center">
            <div className="flex items-center justify-center w-full px-28">
                <input onChange={(e) => handleChange(e.target.value)} placeholder="SEARCH" className="w-full h-16 px-12 text-xl font-arcane rounded bg-opacity-75 outline-amber-200 text-amber-200 bg-gray-900 border-2 border-amber-200" />
            </div>
            <div className="flex flex-1 flex-wrap items-center justify-center">
                {
                   filteredArmors ? filteredArmors?.map(armor => <BoxItem type="Armor" key={armor.id} item={armor} />) :  armors?.map(armor => <BoxItem type="Armor" key={armor.id} item={armor} />)
                }
            </div>
            <div className="flex w-full justify-center items-center h-52">
                <button onClick={() => handleOffset('-')} className="relative mx-auto w-24 h-16 bg-opacity-75 bg-gray-900 text-white font-bold rounded-md">PREV</button>
                <button onClick={() => handleOffset('+')} className="relative mx-auto w-24 h-16 bg-opacity-75 bg-gray-900 text-white font-bold rounded-md">NEXT</button>
            </div>
        </div>
    );
};