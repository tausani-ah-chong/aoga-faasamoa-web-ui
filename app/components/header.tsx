import Link from 'next/link';
import { Button } from './ui/button';

export const Header: React.FC = () => {
  return (
    <header className="bg-white py-8">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-yellow-800 font-bold text-4xl">
          A&apos;oga Fa&apos;a Samoa
        </Link>
        <ul className="flex space-x-4 items-center">
          <li>
            <Link href="/about-us" className="text-gray-800 hover:text-gray-400">About Us</Link>
          </li>
          <li>
            <Link href="/best-practice" className="text-gray-800 hover:text-gray-400">Best Practice</Link>
          </li>
          <li>
            <Link href="/parents-section" className="text-gray-800 hover:text-gray-400">Parents Section</Link>
          </li>
          <li>
            <Link href="/research-special-projects" className="text-gray-800 hover:text-gray-400">Research & Special Projects</Link>
          </li>
          <li>
            <Button variant="secondary">Register Interest</Button>
          </li>
        </ul>
      </nav>
    </header>
  );
};