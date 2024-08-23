import Link from 'next/link';
import { Button } from '../ui/button';

export const Header: React.FC = () => {
  return (
    <header className="bg-white py-8">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="text-yellow-800 font-bold text-4xl">A&apos;oga Fa&apos;a Samoa</div>
        <ul className="flex space-x-4 items-center">
          <li>
            <a className="text-gray-800 hover:text-gray-400">Our staff</a>
          </li>
          <li>
            <a className="text-gray-800 hover:text-gray-400">About</a>
          </li>
          <li>
            <a className="text-gray-800 hover:text-gray-400">Events</a>
          </li>
          <li>
            <a className="text-gray-800 hover:text-gray-400">Visit</a>
          </li>
          <li>
            <Button>Register Interest</Button>
          </li>
        </ul>
      </nav>
    </header>
  );
};