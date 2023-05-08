'use client';

import { useWeapon } from "@/hooks/useWeapon";
import { IWeapon } from "@/interfaces";
import { useEffect, useState } from "react";
import { BoxItem } from "./BoxItem";
import { ItemList } from "./ItemList";

export default function Weapons() {
    const { weapons, getAll } = useWeapon();
    const [filteredWeapons, setFilteredWeapons] = useState<IWeapon[]>();
    const [offset, setOffset] = useState<number>(0);

    useEffect(() => {
        getAll(offset, (offset * 100) + 100);
    }, [getAll, offset])

    const handleChange = (value: string) => {
        const filtered = weapons?.filter(weapon => weapon.name.toLowerCase().includes(value.toLowerCase()));
        setFilteredWeapons(filtered);
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
        <ItemList handleChange={handleChange} handleOffset={handleOffset} items={filteredWeapons || weapons} type="Weapon" />
    );
};