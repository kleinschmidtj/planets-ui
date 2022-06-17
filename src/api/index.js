export class PlanetsApi {
  
  async getPlanets() {
    try {
      const response = await fetch ("https://swapi.dev/api/planets/");
      const body = await response.json();
      console.info("Success getting planets");
      return body
    } catch (e) {
      console.error("Error getting planets", e);
    }
  }
}