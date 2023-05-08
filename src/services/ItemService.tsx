import { Api } from "@/providers";
import { IArmorData, IArmorResponse, IWeaponData, IWeaponResponse} from "@/interfaces";

const getArmors = (offset: number, limit: number) => Api.get<IArmorResponse>(`/armors?limit=${limit}&page=${offset}`);

const getWeapons = (offset: number, limit: number) => Api.get<IWeaponResponse>(`/weapons?limit=${limit}&page=${offset}`);

const getArmorById = (id: string) => Api.get<IArmorData>(`/armors/${id}`).then(res => { return res.data });

const getWeaponById = (id: string) => Api.get<IWeaponData>(`/weapons/${id}`).then(res => { return res.data });

export const ItemService = {
    getArmors,
    getWeapons,
    getArmorById,
    getWeaponById
};