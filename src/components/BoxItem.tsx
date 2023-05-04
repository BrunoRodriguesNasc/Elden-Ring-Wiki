import { IArmor, IWeapon } from "@/interfaces"
import Link from "next/link"

interface boxItemProps {
    item: IArmor | IWeapon,
    type: string
}

export const BoxItem = ({ item, type }: boxItemProps) => {

    return (
        <Link href={`/${type}/${item.id}`} className="w-60 h-60 flex flex-col justify-around items-center m-10 cursor-pointer bg-opacity-75 bg-gray-900">
            <h1 className="font-arcane text-amber-200">{item.name}</h1>
            <img src={item.image} alt={`${item.name}`} width={150} height={150}></img>
        </Link>
    )
}