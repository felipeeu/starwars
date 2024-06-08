export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = searchParams.get("page");
  const slug = searchParams.get("slug");

  const promise = await fetch(`https://swapi.dev/api/${slug}/?page=${page}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const response = await Promise.resolve(promise.json());

  return Response.json(response);
}
