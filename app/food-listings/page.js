const listings = [
  {
    dish: 'Paneer Butter Masala',
    chef: 'Asha R.',
    portions: 8,
    price: '$7'
  },
  {
    dish: 'Chicken Biryani',
    chef: 'Naveen K.',
    portions: 10,
    price: '$9'
  },
  {
    dish: 'Vegan Burrito Bowl',
    chef: 'Mira S.',
    portions: 6,
    price: '$8'
  }
];

export default function FoodListingsPage() {
  return (
    <section className="stack">
      <h1>Food Listings</h1>
      <p>Order from trusted home chefs in your area.</p>
      <div className="card-grid">
        {listings.map((item) => (
          <article className="card" key={item.dish}>
            <h2>{item.dish}</h2>
            <p><strong>Chef:</strong> {item.chef}</p>
            <p><strong>Portions left:</strong> {item.portions}</p>
            <p><strong>Price:</strong> {item.price} per plate</p>
            <button type="button" className="button primary">Order now</button>
          </article>
        ))}
      </div>
    </section>
  );
}
