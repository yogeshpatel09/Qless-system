import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-green-600 text-white py-4 px-8 flex justify-between items-center">
      <div className="text-2xl font-bold">QLess</div>
      <nav className="space-x-6 flex items-center">
        {/* <Link href="/">
          <a className="hover:underline">Home</a>
        </Link>
        <Link href="#features">
          <a className="hover:underline">Features</a>
        </Link>
        <Link href="#contact">
          <a className="hover:underline">Contact</a>
        </Link> */}
        <div className="ml-6 bg-white text-green-600 px-4 py-2 rounded-lg shadow-md">
          <Link href="/login"  className="font-semibold hover:underline">
            Login
          </Link>
        </div>
      </nav>
    </header>
  );
}
