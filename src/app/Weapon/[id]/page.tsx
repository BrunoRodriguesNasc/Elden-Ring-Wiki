'use client'
import { useWeapon } from "@/hooks"
import Image from "next/image";
import { useEffect } from "react";

interface WeaponDetailsProps {
  params: {
    id: string
  }
}

export default function ArmorDetails({ params }: WeaponDetailsProps) {
  const { getById, weapon } = useWeapon();

  useEffect(() => {
    getById(params.id);
  }, [params.id, getById])


  return (
    <div className="flex mx-auto my-24 items-center h-3/6 w-11/12 lg:w-4/6  md:w-2/6 bg-opacity-75 text-amber-200 bg-gray-900 text-center font-bold font-arcane">
      <div className="flex flex-col flex-1 justify-around p-4 items-center text-center text-sm h-full m-4">
        <h1>{weapon?.name}</h1>
        <Image alt={weapon?.name || ''} src={`${weapon?.image}`} width={200} height={200} />
        <div className="md:overflow-hidden text-lg">{weapon?.description}</div>
      </div>
      <div className="flex flex-1 flex-row">
          <div className="flex flex-col flex-1 p-4">
            {weapon?.attack.map((attack) => {
              return (
                <div className="flex flex-row mt-2" key={attack.name}>
                  <div className="flex flex-1">{attack.name}</div>
                  <div className="flex flex-1 justify-end">{attack.amount}</div>
                </div>
              )
            })}
          </div>
          <div className="flex flex-1 flex-col p-4">
            {weapon?.defence.map((defence) => {
              return (
                <div className="flex flex-row mt-2" key={defence.name}>
                  <div className="flex flex-1">{defence.name}</div>
                  <div className="flex flex-1 justify-end">{defence.amount}</div>
                </div>
              )
            })}

          </div>

      </div>
    </div>
  )
} 