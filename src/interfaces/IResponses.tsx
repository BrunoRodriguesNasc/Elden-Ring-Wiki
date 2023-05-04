import { IArmorData } from "./IArmor";
import { IWeaponData } from "./IWeapon";

export interface IResponse {
    data: IArmorData[] | IWeaponData[];
    status: number;
    count: number;
}