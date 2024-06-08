import { useEffect, useState } from "react";
import { getUrlParams } from "../utils/getUrlParams";

export interface Planet {
  id: string;
  name: string;
  residents: string[];
}

const useDataRequest = () => {
  const [planets, setPlanets] = useState<Planet[]>([]);
  const [page, setPage] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchPlanets("/api?page=1");
  }, []);

  useEffect(() => {
    if (page) {
      fetchPlanets(`/api${page}`);
    }
  }, [page]);

  const fetchPlanets = async (url: string) => {
    try {
      const cachedPlanets: Planet[] = JSON.parse(
        localStorage.getItem("planets") as any
      );
      const cachedPlanetsCount = parseInt(
        localStorage.getItem("planetsCount") || "0"
      );

      if (cachedPlanets?.length >= cachedPlanetsCount) {
        setPlanets(cachedPlanets);
        return;
      }

      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      const planetsData = data.results;

      localStorage.setItem("planetsCount", data.count.toString());

      const nextPage = data.next ? getUrlParams(data.next) : null;

      setPage(nextPage);

      const enrichedPlanetData: Planet[] =
        planetsData.map(
          ({
            url,
            name,
            residents,
          }: {
            url: string;
            name: string;
            residents: string[];
          }) => ({
            id: url,
            name,
            residents,
          })
        ) || [];

      setPlanets((prevPlanets) => {
        const allPlanets = [...prevPlanets, ...enrichedPlanetData];
        const uniquePlanets = Array.from(
          new Map(allPlanets.map((p) => [p.id, p])).values()
        );
        localStorage.setItem("planets", JSON.stringify(uniquePlanets));
        return uniquePlanets;
      });
    } catch (error) {
      setError((error as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return {
    planets,
    loading,
    error,
  };
};

export default useDataRequest;
