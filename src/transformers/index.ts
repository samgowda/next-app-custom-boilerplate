export const searchQueryTransformer = (
  query: string,
) => query.replace(/[^A-Z0-9]+/ig, '+');
