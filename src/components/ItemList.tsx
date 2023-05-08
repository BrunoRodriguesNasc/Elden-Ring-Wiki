import { IArmor, IBoss, IWeapon } from "@/interfaces";
import { BoxItem } from "./BoxItem";

type ListItemProps = {
    items: IWeapon[] | IArmor[] | IBoss[] | undefined;
    handleChange: (value: string) => void;
    handleOffset: (value: string) => void;
    type: string;
}

export const ItemList = ({ items, handleChange, handleOffset, type }: ListItemProps) => {
    return (
        <div className="flex flex-col justify-center items-center md:w-full">
            <div className="flex items-center justify-center md:w-full md:px-28">
                <input onChange={(e) => handleChange(e.target.value)} placeholder="SEARCH" className="w-full h-16 px-12 text-xl font-arcane rounded bg-opacity-75 outline-amber-200 text-amber-200 bg-gray-900 border-2 border-amber-200" />
            </div>
            <div className="flex flex-1 flex-wrap items-center justify-center">
                { items?.map(item => <BoxItem type={type} key={item.id} item={item} />) }
            </div>
            <div className="flex w-full justify-center items-center h-52">
                <button onClick={() => handleOffset('-')} className="relative mx-auto w-24 h-16 bg-opacity-75 bg-gray-900 text-white font-bold rounded-md">PREV</button>
                <button onClick={() => handleOffset('+')} className="relative mx-auto w-24 h-16 bg-opacity-75 bg-gray-900 text-white font-bold rounded-md">NEXT</button>
            </div>
        </div>
    )
}