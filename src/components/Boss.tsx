'use client';
import { useBoss } from "@/hooks";
import React, { useEffect, useState } from "react";
import { IBoss } from "@/interfaces";
import { ItemList } from "./ItemList";

export default function Armors() {
    const { bosses, getAll } = useBoss();
    const [filteredArmors, setFilteredArmors] = useState<IBoss[]>();
    const [offset, setOffset] = useState<number>(0);

    useEffect(() => {
        getAll(offset, (offset * 100) + 100);
    }, [getAll, offset])

    const handleChange = (value: string) => {
        const filtered = bosses?.filter(boss => boss.name.toLowerCase().includes(value.toLowerCase()));
        setFilteredArmors(filtered);
    }

    const handleOffset = (signal: string) => {
        if (offset < 2 && offset > 0) {
            signal === '+' ? setOffset(offset + 1) : setOffset(offset - 1);
        }
        if (offset === 2 && signal === '-') {
            setOffset(offset - 2)
        } else if (offset === 0 && signal === '+') {
            setOffset(offset + 1)
        }
    }

    return (
            <ItemList handleChange={handleChange} handleOffset={handleOffset} items={filteredArmors || bosses} type="Boss" />
    );
};