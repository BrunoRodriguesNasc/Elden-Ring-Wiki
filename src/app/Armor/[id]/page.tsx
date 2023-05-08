/* eslint-disable @next/next/no-img-element */
'use client'
import { useArmor } from "@/hooks"
import { useEffect } from "react";

interface ArmorDetailsProps {
  params: {
    id: string
  }
}

export default function ArmorDetails({ params }: ArmorDetailsProps) {
  const { getById, armor } = useArmor();

  useEffect(() => {
    getById(params.id);
  }, [params.id, getById])

  return (
    <div className="flex mx-auto my-24 items-center h-3/6 w-11/12 lg:w-4/6  md:w-2/6 bg-opacity-75 text-amber-200 bg-gray-900 text-center font-bold font-arcane">
      <div className="flex flex-col flex-1 justify-around p-4 items-center text-center text-sm h-full m-4">
        <h1>{armor?.name}</h1>
        <img alt={armor?.name} src={`${armor?.image}`} width={200} height={200}/>
        <div className="md:overflow-hidden text-lg">{armor?.description}</div>
      </div>
      <div className="flex flex-1 flex-row">
          <div className="flex flex-col flex-1 p-4">
            {armor?.resistance.map((resistance) => {
              return (
                <div className="flex flex-row mt-2" key={resistance.name}>
                  <div className="flex flex-1">{resistance.name}</div>
                  <div className="flex flex-1 justify-end">{resistance.amount}</div>
                </div>
              )
            })}
          </div>
          <div className="flex flex-1 flex-col p-4">
            {armor?.dmgNegation.map((dmgNegation) => {
              return (
                <div className="flex flex-row mt-2" key={dmgNegation.name}>
                  <div className="flex flex-1">{dmgNegation.name}</div>
                  <div className="flex flex-1 justify-end">{dmgNegation.amount}</div>
                </div>
              )
            })}

          </div>



      </div>
    </div>
  )
} 