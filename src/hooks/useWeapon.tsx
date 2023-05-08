import { IWeapon } from "@/interfaces";
import { ItemService } from "@/services/ItemService";
import { useCallback, useState } from "react";

export const useWeapon = () => {
    const [weapons, setWeapons] = useState<IWeapon[]>();
    const [weapon, setWeapon] = useState<IWeapon>();

    const getAll = useCallback(async (offset: number, limit: number) => {
        const { data, status } = await ItemService.getWeapons(offset, limit);
        if (status !== 200) throw new Error('Error');
        setWeapons(data.data);
    }, []);

    const getById = useCallback(async (id: string) => {
        const { data } = await ItemService.getWeaponById(id);
        setWeapon(data);
    }, []);


    return {
        weapons,
        weapon,
        getAll,
        getById
    };
};