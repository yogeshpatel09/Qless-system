import Head from 'next/head';
import HomeSection from './Component/HomeSection';
import Header from './Component/Header';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>QLess Management System</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className='min-h-screen'>
        <HomeSection />
      </main>

      <footer className="text-center py-4 bg-gray-800 text-white">
        &copy; 2024 QLess Management System. All rights reserved.
      </footer>
    </div>
  );
}
