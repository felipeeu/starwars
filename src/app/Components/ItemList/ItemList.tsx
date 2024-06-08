"use client";
import useDataRequest, { Person } from "@/app/hooks/useDataRequest";
import { ResponsiveItem } from "../ItemCard";
import { useEffect, useState } from "react";

interface ItemListProps {
  title: string;
  selectedPlanet: string;
  defaultValue: string;
}

const ItemList: React.FC<ItemListProps> = ({
  title,
  selectedPlanet,
  defaultValue,
}) => {
  const { people, loading, error } = useDataRequest();
  const isDefaultValue = selectedPlanet === defaultValue;

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <div className="flex flex-col w-auto px-7 font-helvetica-neue gap-[2.5em]">
      <h2 className="font-light text-[#333333] leading-10 lg:text-34">
        {title}
      </h2>
      <div className="lg:grid lg:grid-cols-4">
        {people
          .filter((person: Person) =>
            isDefaultValue ? person : person.homeworld === selectedPlanet
          )
          .map((person: Person) => (
            <div key={person.name}>
              <ResponsiveItem person={person} />
            </div>
          ))}
      </div>
      <button className="min-w-[196px] border border-[#002B53] self-center lg:min-w-[496px]">
        <span className="loadmore uppercase text-[#002B53]">load more</span>
      </button>
    </div>
  );
};
export { ItemList };
