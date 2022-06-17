function PlanetRow({ planet }) {
  const { title, climate, numberResidents, terrain, population, waterSurfaceArea } = planet
  return (
    <tr>
      <td>{<a href={title.url} target="_blank" rel="noreferrer">{title.name}</a>}</td>
      <td>{climate}</td>
      <td>{numberResidents}</td>
      <td>{terrain}</td>
      <td>{population}</td>
      <td>{waterSurfaceArea}</td>
    </tr>
  )
}

export function PlanetsTable({ planets }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Climate</th>
          <th>Number of residents</th>
          <th>Terrains</th>
          <th>Population</th>
          <th>Surface area covered by water (km&sup2;)</th>
        </tr>
      </thead>
      <tbody>
        {planets.map((planet, index) =>
          <PlanetRow key={index} planet={planet} />
        )}
      </tbody>
    </table>
  )
}