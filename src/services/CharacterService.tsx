import { Api } from "@/providers";
import { IBossData, IBossResponse } from "@/interfaces";

const getBosses = (offset: number, limit: number) => Api.get<IBossResponse>(`/bosses?limit=${limit}&page=${offset}`);

const getBossById = (id: string) => Api.get<IBossData>(`/bosses/${id}`).then(res => { return res.data });

export const BossService = {
    getBosses,
    getBossById
}