import Link from 'next/link';

const navItems = [
  { label: 'About', href: '/about' },
  { label: 'Food Listings', href: '/food-listings' },
  { label: 'Neighbours', href: '/neighbours' }
];

export default function Navbar() {
  return (
    <header className="navbar-wrapper">
      <nav className="navbar">
        <Link href="/" className="brand">Neighbourhood Chef</Link>
        <div className="nav-links">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="nav-link">
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
