'use client'
import { useBoss } from "@/hooks"
import Image from "next/image";
import { useEffect } from "react";

interface BossDetailsProps {
  params: {
    id: string
  }
}

export default function BossDetails({ params }: BossDetailsProps) {
  const { getById, boss } = useBoss();

  useEffect(() => {
    getById(params.id);
  }, [getById, params.id])
  
  return (
    <div className="flex mx-auto my-24 items-center h-3/6 w-11/12 lg:w-4/6  md:w-2/6 bg-opacity-75 text-amber-200 bg-gray-900 text-center font-bold font-arcane">
      <div className="flex flex-col flex-1 justify-around p-4 items-center text-center text-sm h-full m-4">
        <h1>{boss?.name}</h1>
        <Image alt={boss?.name || ''} src={`${boss?.image}`} className="w-3/6 object-contain h-3/6"/>
        <div className="md:overflow-hidden text-lg">{boss?.description}</div>
      </div>
      <div className="flex flex-1 flex-row w-full h-full">
          <div className="flex flex-col flex-1 p-4 justify-center items-center">
            <h1 className="text-2xl">Drops</h1>
            {boss?.drops.map((drop) => {
              return (
                <div className="flex flex-row mt-2" key={drop}>
                  <div className="flex flex-1">{drop}</div>
                </div>
              )
            })}
          </div>
      </div>
    </div>
  )
} 