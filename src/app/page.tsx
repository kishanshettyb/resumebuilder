import Navbar from '@/components/navbar';

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto">
        <div className="w-4/5 my-48">
          <h1 className="mb-5 text-6xl font-bold text-center text-slate-700 dark:text-slate-50">
            Unlock
            <br /> Your Career Potential
          </h1>
          <h2 className="w-full font-bold text-center text-green-600 text-8xl">
            Create a Winning Resume Today!
          </h2>
        </div>
      </div>
    </div>
  );
}
