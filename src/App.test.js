import { render, screen } from '@testing-library/react';
import App, { calculateWaterSurfaceArea, formatPlanetData } from './App';

test('renders planets header', () => {
  render(<App />);
  const headerElement = screen.getByText(/Planets!/i);
  expect(headerElement).toBeInTheDocument();
});

test('formats planets data', () => {
  const testPlanetData = {
    "name": "Alderaan",
    "rotation_period": "24",
    "orbital_period": "364",
    "diameter": "12500",
    "climate": "temperate",
    "gravity": "1 standard",
    "terrain": "grasslands, mountains",
    "surface_water": "40",
    "population": "2000000000",
    "residents": [
      "https://swapi.dev/api/people/5/",
      "https://swapi.dev/api/people/68/",
      "https://swapi.dev/api/people/81/"
    ],
    "films": [
      "https://swapi.dev/api/films/1/",
      "https://swapi.dev/api/films/6/"
    ],
    "created": "2014-12-10T11:35:48.479000Z",
    "edited": "2014-12-20T20:58:18.420000Z",
    "url": "https://swapi.dev/api/planets/2/"
  }
  const formattedData = formatPlanetData(testPlanetData)
  expect(formattedData).toMatchObject({"climate": "temperate", "numberResidents": 3, "population": "2 000 000 000", "terrain": "grasslands, mountains", "title": {"name": "Alderaan", "url": "https://swapi.dev/api/planets/2/"}, "waterSurfaceArea": "196 349 541"});
});

test('calculates water surface area', () => {
  const testSurfaceArea = calculateWaterSurfaceArea("100", "1")
  expect(testSurfaceArea).toBe("314")
  const alderaanWaterSurfaceArea = calculateWaterSurfaceArea("12500", "40")
  expect(alderaanWaterSurfaceArea).toBe("196 349 541")
})