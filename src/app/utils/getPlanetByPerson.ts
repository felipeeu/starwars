import { Planet, Person } from "../hooks/useDataRequest";

export const getPlanetByPerson = ({
  planets,
  person,
}: {
  planets: Planet[];
  person: Person;
}) => {
  const matchPlanet = planets.find((planet) =>
    planet.residents.some((resident: string) => resident === person.id)
  );

  return matchPlanet;
};
