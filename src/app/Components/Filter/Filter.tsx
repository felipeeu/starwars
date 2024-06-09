"use client";
import useDataRequest, { Planet } from "@/app/hooks/useDataRequest";
import { ChangeEvent, MouseEventHandler } from "react";

interface FilterComponentProps {
  label: string;
  defaultValue: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const FilterComponent: React.FC<FilterComponentProps> = ({
  label,
  defaultValue,
  onChange,
  onClick,
}) => {
  const { planets } = useDataRequest();
  return (
    <div className="flex flex-row font-helvetica-neue border-t border-[#E6E6E6] pt-4 px-[25px] pb-[15px] md:border-b md:py-[26px] md:px-[50px] md:justify-between">
      <div className="w-full flex flex-row md:w-auto md:items-center">
        <label className="min-w-16 text-[#666666] capitalize">{label}:</label>
        <select
          defaultValue={defaultValue}
          className="w-full pl-[13px] border-b  border-[#C8C8C8] bg-[white] md:w-[190px] capitalize"
          onChange={onChange}
        >
          <option className="capitalize" value={defaultValue}>
            {defaultValue}
          </option>
          {planets.map((planet: Planet) => {
            return (
              <option key={planet.name} value={planet.id}>
                {planet.name}
              </option>
            );
          })}
        </select>
      </div>
      <button
        className=" clearall hidden border border-[#C8C8C8] py-px px-10 md:block md:min-w-[158px]"
        onClick={onClick}
      >
        clear all
      </button>
    </div>
  );
};

export { FilterComponent };
