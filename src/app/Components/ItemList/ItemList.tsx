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
interface ConditionalRenderingProps {
  error: any;
  loading: boolean;
  people: Person[];
  defaultValue: string;
  selectedPlanet: string;
  visibleItems: number;
}

const ConditionalRendering: React.FC<ConditionalRenderingProps> = ({
  error,
  loading,
  people,
  defaultValue,
  selectedPlanet,
  visibleItems,
}) => {
  const isDefaultValue = selectedPlanet === defaultValue;
  const isPlanetResident = (person: Person) =>
    person.homeworld === selectedPlanet;
  const filteredPeople = isDefaultValue
    ? people
    : people.filter(isPlanetResident);
  if (error) {
    return <div className="flex justify-center text-3xl">Error: {error}</div>;
  } else if (filteredPeople.length === 0) {
    return (
      <div className="flex justify-center text-3xl">No residents to show</div>
    );
  } else if (loading) {
    return <Loader />;
  }
  return filteredPeople.slice(0, visibleItems).map((person: Person) => (
    <div key={person.name}>
      <ResponsiveItem person={person} />
    </div>
  ));
};

const ItemList: React.FC<ItemListProps> = ({
  title,
  selectedPlanet,
  defaultValue,
  visibleItems,
  onClick,
}) => {
  const { people, loading, error } = useDataRequest();

  return (
    <div className="flex flex-col w-auto px-7 font-helvetica-neue gap-[2.5em]">
      <h2 className="font-light text-[#333333] leading-10 md:text-34 capitalize">
        {title}
      </h2>
      <div className="md:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
        <ConditionalRendering
          people={people}
          error={error}
          loading={loading}
          defaultValue={defaultValue}
          visibleItems={visibleItems}
          selectedPlanet={selectedPlanet}
        />
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
