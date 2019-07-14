export default function useQueryParams(path) {
  const searchParams = new URLSearchParams(path.split(/\?/)[1]);

  const query = {};
  for (const [key, value] of searchParams) {
    query[key] = value;
  }

  return query;
}
