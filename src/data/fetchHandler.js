
export const handleFetch = async (url,buscador,API_KEY) => 
{
    try 
    {
      const response = await fetch(
        `${url}?query=${buscador}&api_key=${API_KEY}`
      );

      const data = await response.json();

    return(data.results || []);
    
    } 
    catch (e) 
    {
      console.error("se ha producido un error", e);
      return [];
    }
  };