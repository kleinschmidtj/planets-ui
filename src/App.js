import './App.css';
import { PlanetsApi } from "./api";
import React, { useState, useEffect } from 'react';
import { formatLargeNumber } from './utils/formatLargeNumber';
import { PlanetsTable } from "./components/PlanetsTable"

export function calculateWaterSurfaceArea(diameterOfPlanet, percentWater) {
  if (percentWater === "unknown") return "?";
  const radius = diameterOfPlanet / 2;
  const surfaceArea = 4 *  Math.PI * Math.pow(radius,2);
  const waterSurfaceArea = surfaceArea * (percentWater / 100)
  return formatLargeNumber(Math.round(waterSurfaceArea));
}

export function formatPlanetData(planet) {
  const { url, name, climate, residents, terrain, population, diameter, surface_water } = planet
  return {
    title: { url, name },
    climate,
    numberResidents: residents.length,
    terrain,
    population: formatLargeNumber(population),
    waterSurfaceArea: calculateWaterSurfaceArea(diameter, surface_water)
  }
}

function App() {
  const [planets, setPlanets] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    async function fetchPlanets() {
      const api = new PlanetsApi()
      await api.getPlanets().then(data => {
        const planets = data.results.sort((a, b) => a.name.localeCompare(b.name)).map(planet => formatPlanetData(planet))
        setPlanets(planets)
        setIsLoading(false)
      }).catch(error => setError(true));
    }
    fetchPlanets()
  }, []);

  return (
    <div>
      <header className="planets-header">
        <h1>Planets!</h1>
        {isLoading && !error && <p>Loading...</p>}
        {error && planets.length === 0 && <p>Error getting planets data.</p>}
      </header>
      {!isLoading && <PlanetsTable planets={planets} />}
    </div>
  );
}

export default App;
