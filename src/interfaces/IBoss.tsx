export interface IBoss {
    id: string;
    name: string;
    image: string;
    description: string;
    drops: string[];
    healthPoints: string;
}

export interface IBossData {
    data: IBoss;
}

export interface IBossResponse {
    data: IBoss[];
    status: number;
    count: number;
}