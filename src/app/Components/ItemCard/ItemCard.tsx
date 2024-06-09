import useDataRequest, { Person } from "@/app/hooks/useDataRequest";
import { getPlanetByPerson } from "@/app/utils/getPlanetByPerson";
import Image from "next/image";

interface ItemProps {
  person: Person;
}

const ResponsiveItem: React.FC<ItemProps> = ({ person }) => {
  const { planets } = useDataRequest();
  const planet = getPlanetByPerson({ planets, person });

  return (
    <>
      {/* Mobile View */}
      <div className="md:hidden flex flex-row pr-[59px] ">
        <Image
          className="w-auto pr-3 pb-4"
          src={person.image}
          alt="image"
          width={115}
          height={146}
        />
        <div className="flex flex-col gap-[5px] pb-[13px]">
          <h4>{person.name}</h4>
          <h5>{planet?.name}</h5>
        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden md:grid md:pb-[110px]">
        <Image
          className="w-9/12 h-auto pr-3 pb-4 2xl:w-full"
          src={person.image}
          alt="image"
          width={115}
          height={146}
        />
        <div className="flex flex-col gap-[5px] pb-[13px]">
          <h4 className="pr-[278.5px]">{person.name}</h4>
          <h5 className="text-base pr-[364.5px]">{planet?.name}</h5>
        </div>
        <div className="p-item uppercase text-[#757575]">
          <p>{`height . ${person.height}`}</p>
          <p>{`mass . ${person.mass}`}</p>
          <p>{`gender . ${person.gender}`}</p>
        </div>
      </div>
    </>
  );
};

export { ResponsiveItem };
