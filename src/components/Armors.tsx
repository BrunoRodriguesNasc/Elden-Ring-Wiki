'use client';
import { useArmor } from "@/hooks/useArmor";
import React, { useEffect, useState } from "react";
import { IArmor } from "@/interfaces";
import { ItemList } from "./ItemList";

export default function Armors() {
    const { armors, getAll } = useArmor();
    const [filteredArmors, setFilteredArmors] = useState<IArmor[]>();
    const [offset, setOffset] = useState<number>(0);

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
            <ItemList handleChange={handleChange} handleOffset={handleOffset} items={filteredArmors || armors} type="Armor" />
    );
};