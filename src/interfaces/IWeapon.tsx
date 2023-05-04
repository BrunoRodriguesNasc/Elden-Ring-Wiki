interface IAttack {
    name: string;
    amount: number;
}

interface IDefence {
    name: string;
    amount: number;
}

interface IScalesWith {
    name: string;
    scaling: string;
}

interface IRequiredAttributes {
    name: string;
    amount: number;
}

export interface IWeapon {
    id: string;
    name: string;
    image: string;
    description: string;
    attack: IAttack[];
    defence: IDefence[];
    scalesWith: IScalesWith[];
    requiredAttributes: IRequiredAttributes[];
    category: string;
    weight: number;
}

export interface IWeaponData {
    data: IWeapon;
}

export interface IWeaponResponse {
    success: boolean;
    count: number;
    data: IWeapon[];
}