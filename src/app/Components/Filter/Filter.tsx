"use client";
import useDataRequest, { Planet } from "@/app/hooks/useDataRequest";

interface FilterComponentProps {
  label: string;
  defaultValue: string;
  onChange: () => void;
}

const FilterComponent: React.FC<FilterComponentProps> = ({
  label,
  defaultValue,
  onChange,
}) => {
  const { planets } = useDataRequest();
  return (
    <div className="flex flex-row font-helvetica-neue border-t border-[#E6E6E6] pt-4 px-[25px] pb-[15px] lg:border-b lg:py-[26px] lg:px-[50px] lg:justify-between">
      <div className="w-full flex flex-row lg:w-auto lg:items-center">
        <label className="min-w-16 text-[#666666]">{label}:</label>
        <select
          defaultValue={defaultValue}
          className="w-full pl-[13px] border-b  border-[#C8C8C8] bg-[white] lg:w-[190px] capitalize"
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
      <button className="hidden border border-[#C8C8C8] py-px px-10 lg:block lg:min-w-[158px]">
        <span className="clearall">clear all</span>
      </button>
    </div>
  );
};

export { FilterComponent };
