import { IBoss } from "@/interfaces";
import {  BossService } from "@/services/index";
import { useCallback, useState } from "react";

export const useBoss = () => {
    const [bosses, setBosses] = useState<IBoss[]>();
    const [boss, setBoss] = useState<IBoss>();

    const getAll = useCallback(async (offset: number, limit: number) => {
        const { data, status } = await BossService.getBosses(offset, limit);
        if (status !== 200) throw new Error('Error');
        setBosses(data.data);
    }, []);

    const getById = useCallback(async (id: string) => {
        const { data } = await BossService.getBossById(id);
        setBoss(data);
    }, []);


    return {
        bosses,
        boss,
        getAll,
        getById
    };
};