import Link from 'next/link';

export function Navbar() {
  return (
    <nav className="mt-10">
      <h1 className="mb-3 text-center text-3xl font-bold">SavingBucks Web Application integrated with Shopify</h1>

      <ul className="text-center">
        <li>
          <Link href="/" className="text-blue-600 hover:underline">
            Products
          </Link>
        </li>
      </ul>
    </nav>
  );
}
