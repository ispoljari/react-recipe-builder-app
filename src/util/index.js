export const fetchResults = async (urlWithQuery) => {
  let rawData, resultJSON;

  try {
    rawData = await fetch(urlWithQuery);
  } catch (error) {
    return new Error('Fetch error!');
  }

  const transformToJSON = async () => {
    if (rawData) {
      try {
        resultJSON = await rawData.json();
      } catch (error) {
        return new Error('JSON transform error!');
      }
    }

    return resultJSON;
  }

  return {
    transformToJSON
  }
}

export const isError = obj => {
  const result = obj instanceof Error ? true : false;
  return result;
}