export default function Home() {
  return (
    <>
      <nav className="bg-gray-800 text-white p-4">
        <ul className="flex justify-center space-x-6">
          <li><a href="#" className="hover:underline">Home</a></li>
          <li><a href="#" className="hover:underline">Blog</a></li>
          <li><a href="#" className="hover:underline">About</a></li>
          <li><a href="#" className="hover:underline">Contact</a></li>
        </ul>
      </nav>

      <div className="flex justify-center items-center min-h-screen bg-black">
        <div className="text-center space-y-4 bg-gray-900 text-white p-6 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold">What is the code that</h1>
          <p className="text-lg">Matrix</p>

          <h1 className="text-2xl font-bold">What is the code that</h1>
          <p className="text-lg">Insertion</p>

          <h1 className="text-2xl font-bold">What is the code that</h1>
          <p className="text-lg">Merge Sort</p>
        </div>
      </div>
    </>
  );
}
