"use client";
import useDataRequest, { Person } from "@/app/hooks/useDataRequest";
import { ResponsiveItem } from "../ItemCard";
import { MouseEventHandler } from "react";
import { Loader } from "../Loader";

interface ItemListProps {
  title: string;
  selectedPlanet: string;
  defaultValue: string;
  visibleItems: number;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const ItemList: React.FC<ItemListProps> = ({
  title,
  selectedPlanet,
  defaultValue,
  visibleItems,
  onClick,
}) => {
  const { people, loading, error } = useDataRequest();
  const isDefaultValue = selectedPlanet === defaultValue;

  if (error) {
    return <div className="flex justify-center text-3xl">Error: {error}</div>;
  }
  return (
    <div className="flex flex-col w-auto px-7 font-helvetica-neue gap-[2.5em]">
      <h2 className="font-light text-[#333333] leading-10 md:text-34 capitalize">
        {title}
      </h2>
      <div className="md:grid md:grid-cols-4">
        {loading ? (
          <Loader />
        ) : (
          people
            .filter((person: Person) =>
              isDefaultValue ? person : person.homeworld === selectedPlanet
            )
            .slice(0, visibleItems)
            .map((person: Person) => {
              return (
                <div key={person.name}>
                  <ResponsiveItem person={person} />
                </div>
              );
            })
        )}
      </div>
      <button
        className="loadmore min-w-[196px] border border-[#002B53] self-center md:min-w-[496px]"
        onClick={onClick}
      >
        load more
      </button>
    </div>
  );
};
export { ItemList };
