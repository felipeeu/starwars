import { useEffect, useState } from "react";

export interface Planet {
  id: string;
  name: string;
  residents: string[];
}

export interface Person {
  id: string;
  name: string;
  homeworld: string;
  gender: string;
  mass: string;
  height: string;
  image: string;
}

const useDataRequest = () => {
  const [planets, setPlanets] = useState<Planet[]>([]);
  const [people, setPeople] = useState<Person[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAllData = async () => {
      setLoading(true);
      try {
        await fetchPlanets("/api/?slug=planets&page=1");
        await fetchPeople("/api/?slug=people&page=1");
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchAllData();
  }, []);

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

      if (data.next) {
        await fetchPlanets(data.next);
      }
    } catch (error) {
      setError((error as Error).message);
    } finally {
      setLoading(false);
    }
  };

  const fetchPeople = async (url: string) => {
    try {
      const cachedPeople: Person[] = JSON.parse(
        localStorage.getItem("people") as any
      );
      const cachedPeopleCount = parseInt(
        localStorage.getItem("peopleCount") || "0"
      );

      if (cachedPeople?.length >= cachedPeopleCount) {
        setPeople(cachedPeople);
        return;
      }

      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      const peopleData = data.results;

      localStorage.setItem("peopleCount", data.count.toString());
      const random = Math.floor(Math.random() * 100);
      const enrichedPeopleData: Person[] =
        peopleData.map(
          (
            {
              url,
              name,
              homeworld,
              gender,
              mass,
              height,
            }: {
              url: string;
              name: string;
              homeworld: string;
              mass: string;
              height: string;
              gender: string;
            },
            idx: number
          ) => ({
            id: url,
            name,
            homeworld,
            gender,
            mass,
            height,
            image: `https://picsum.photos/450/240?random=${idx}`,
          })
        ) || [];

      setPeople((prevPeople) => {
        const allPeople = [...prevPeople, ...enrichedPeopleData];
        const uniquePeople = Array.from(
          new Map(allPeople.map((p) => [p.id, p])).values()
        );
        localStorage.setItem("people", JSON.stringify(uniquePeople));
        return uniquePeople;
      });

      if (data.next) {
        await fetchPeople(data.next);
      }
    } catch (error) {
      setError((error as Error).message);
    }
  };
  return {
    planets,
    people,
    loading,
    error,
  };
};

export default useDataRequest;
