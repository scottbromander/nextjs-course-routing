import Head from 'next/head';
import Header from '../components/header';

export default function Home() {
  return (
    <div className="container">
      <Header />

      <main>
        <h1>Welcome,</h1>
        <p>To a simple Next site.</p>
      </main>
    </div>
  );
}
