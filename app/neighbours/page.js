const neighbours = [
  { name: 'Priya M.', specialty: 'South Indian Breakfasts', distance: '0.8 km away' },
  { name: 'Sam T.', specialty: 'Weekly Meal Prep', distance: '1.2 km away' },
  { name: 'Carla D.', specialty: 'Healthy Salads & Soups', distance: '2.0 km away' }
];

export default function NeighboursPage() {
  return (
    <section className="stack">
      <h1>Neighbour Chefs</h1>
      <p>Meet cooks nearby and discover their specialties.</p>
      <ul className="list">
        {neighbours.map((neighbour) => (
          <li key={neighbour.name} className="list-item">
            <h2>{neighbour.name}</h2>
            <p>{neighbour.specialty}</p>
            <p>{neighbour.distance}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
