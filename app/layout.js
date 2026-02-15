import './globals.css';
import Navbar from './components/Navbar';

export const metadata = {
  title: 'Neighbourhood Chef',
  description: 'List home-cooked meals and order from neighbours nearby.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="container">{children}</main>
      </body>
    </html>
  );
}
