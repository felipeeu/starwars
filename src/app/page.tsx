"use client";
import { useCallback, useState } from "react";
import { FilterComponent, ItemList } from "./Components";

export default function Home() {
  const DEFAULT_VALUE = "all";
  const [selectedPlanet, setSelectedPlanet] = useState(DEFAULT_VALUE);

  const handleChange: any = useCallback(
    (e: any) => {
      setSelectedPlanet(e.target.value);
    },
    [selectedPlanet]
  );
  return (
    <main className="">
      <FilterComponent
        label={"Filter By"}
        defaultValue={DEFAULT_VALUE}
        onChange={handleChange}
      />
      <ItemList
        title={" All Characters"}
        selectedPlanet={selectedPlanet}
        defaultValue={DEFAULT_VALUE}
      />
    </main>
  );
}
