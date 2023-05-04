interface IResistance {
    name: string;
    amount: number;
}

interface IDamageNegation {
    name: string;
    amount: number;
}

export interface IArmor {
    id: string;
    name: string;
    image: string;
    description: string;
    category: string;
    weight: number;
    dmgNegation: IDamageNegation[];
    resistance: IResistance[];
}

export interface IArmorData {
    data: IArmor;
}

export interface IArmorResponse {
    data: IArmor[];
    status: number;
    count: number;
}