import { IArmorData, IArmorResponse, IWeaponData, IWeaponResponse} from "@/interfaces";
import { Api } from "@/providers";

const getAllArmor = (offset: number, limit: number) => Api.get<IArmorResponse>(`/armors?limit=${limit}&page=${offset}`);

const getAllWeapons = (offset: number, limit: number) => Api.get<IWeaponResponse>(`/weapons?limit=${limit}&page=${offset}`);

const getArmorById = (id: string) => Api.get<IArmorData>(`/armors/${id}`).then(res => { return res.data });

const getWeaponById = (id: string) => Api.get<IWeaponData>(`/weapons/${id}`).then(res => { return res.data });

export const ItemService = {
    getAllArmor,
    getAllWeapons,
    getArmorById,
    getWeaponById
};