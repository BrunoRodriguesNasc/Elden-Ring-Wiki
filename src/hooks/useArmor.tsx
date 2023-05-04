import { IArmor } from "@/interfaces";
import { ItemService } from "@/services/ItemService";
import { useCallback, useState } from "react";

export const useArmor = () => {
    const [armors, setArmors] = useState<IArmor[]>();
    const [armor, setArmor ] = useState<IArmor>();

    const getAll = useCallback(async (offset: number, limit: number) => {
        const { data, status } = await ItemService.getAllArmor(offset, limit);
        if (status !== 200) throw new Error('Error');
        setArmors(data.data);
    }, []);

    const getById = useCallback(async (id: string) => {
        const { data } = await ItemService.getArmorById(id);
        setArmor(data);
    }, []);


    return {
        armors,
        armor,
        getAll,
        getById
    };
};