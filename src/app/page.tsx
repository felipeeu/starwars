"use client";
import { FilterComponent, ItemList } from "./Components";
import useDataRequest from "./hooks/useDataRequest";

export default function Home() {
  const { planets, loading, error } = useDataRequest();
  return (
    <main className="">
      <FilterComponent
        label={"Filter By"}
        planets={planets}
        defaultValue={"all"}
      />
      <ItemList />
    </main>
  );
}
