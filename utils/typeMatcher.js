export default function typeMatcher(value, map) {
  const typeOfValue = typeof value;

  switch (typeOfValue) {
    case "number":
      return map.number && map.number(value);

    case "string":
      return map.string && map.string(value);

    case "boolean":
      return map.boolean && map.boolean(value);

    default:
      throw new Error(`Unable to match type: ${typeOfValue}`);
  }
}
