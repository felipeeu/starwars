"use client";
import { ChangeEvent, useCallback, useState } from "react";
import { FilterComponent, Header, ItemList } from "./Components";
import {
  DEFAULT_VALUE,
  DEFAULT_VISIBLE_ITEMS,
  COLUMNS_QUANTITY,
  NONE_VISIBLE_ITEMS,
  HEADER_TITLE,
  HEADER_BODY,
  FILTER_COMPONENT_LABEL,
  LIST_ITEM_TITLE,
} from "./constants";

export default function Home() {
  const [selectedPlanet, setSelectedPlanet] = useState<string>(DEFAULT_VALUE);
  const [visibleItems, setVisibleItems] = useState<number>(
    DEFAULT_VISIBLE_ITEMS
  );

  const handleChange = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedPlanet(e.target.value);
  }, []);

  const handleLoadMore = useCallback(() => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + COLUMNS_QUANTITY);
  }, []);

  const handleClearAll = useCallback(() => {
    setVisibleItems(NONE_VISIBLE_ITEMS);
  }, []);

  return (
    <main className="flex flex-col  gap-[28px]">
      <Header title={HEADER_TITLE} body={HEADER_BODY} />
      <FilterComponent
        label={FILTER_COMPONENT_LABEL}
        defaultValue={DEFAULT_VALUE}
        onChange={handleChange}
        onClick={handleClearAll}
      />
      <ItemList
        title={LIST_ITEM_TITLE}
        selectedPlanet={selectedPlanet}
        defaultValue={DEFAULT_VALUE}
        visibleItems={visibleItems}
        onClick={handleLoadMore}
      />
    </main>
  );
}
