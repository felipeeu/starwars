export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = searchParams.get("page");

  const resPlanet = await fetch(`https://swapi.dev/api/planets/?page=${page}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const response = await Promise.resolve(resPlanet.json());

  return Response.json(response);
}
