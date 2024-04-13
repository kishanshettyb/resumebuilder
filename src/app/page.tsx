import Navbar from '@/components/navbar';
export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto">
        <div className="w-4/5 my-48">
          <h1 className="text-slate-700 mb-5 text-6xl text-center font-bold">
            Unlock
            <br /> Your Career Potential
          </h1>
          <h2 className="text-8xl w-full text-center text-green-600  font-bold">
            Create a Winning Resume Today!
          </h2>
        </div>
      </div>
    </div>
  );
}
