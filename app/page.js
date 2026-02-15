import Link from 'next/link';

export default function HomePage() {
  return (
    <section className="hero">
      <p className="eyebrow">Fresh meals from local kitchens</p>
      <h1>Buy and sell homemade food with neighbours you trust.</h1>
      <p>
        Neighbourhood Chef makes it simple for home cooks to list daily meals and for nearby
        residents to order quickly.
      </p>
      <div className="cta-row">
        <Link href="/food-listings" className="button primary">Explore Food Listings</Link>
        <Link href="/neighbours" className="button secondary">Find Neighbours</Link>
      </div>
    </section>
  );
}
