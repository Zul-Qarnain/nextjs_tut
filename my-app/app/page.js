import Link from 'next/link'
//import style from '/workspaces/nextjs_tut/my-app/app/home.module.css';
import Image from 'next/image';

export default function Home() {
  return (
    <>




      <nav className="bg-gray-800 text-white p-4">
        <ul className="flex justify-center space-x-6">
        
        <Link href="#" className="hover:underline"><li>Home</li></Link>
        <Link href="#" className="hover:underline"><li>Blog</li></Link>
        <Link href="/About" className="hover:underline"><li>About</li></Link>
        <Link href="/Contact" className="hover:underline"><li>Contact</li></Link>
        </ul>
      </nav>

      <div className="flex justify-center items-center min-h-screen bg-black">
  <div className="flex flex-col items-center space-y-6">
    <Image 
      src="/dash.png" 
      alt="Hunting Coder" 
      width={180} 
      height={200} 
      className="rounded-md shadow-lg"
    />
    <div className="text-center space-y-4 bg-gray-900 text-white p-6 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold">What is the code that</h1>
      <p className="text-lg">Matrix</p>

      <h1 className="text-2xl font-bold">What is the code that</h1>
      <p className="text-lg">Insertion</p>

      <h1 className="text-2xl font-bold">What is the code that</h1>
      <p className="text-lg">Merge Sort</p>
    </div>
  </div>
</div>

    </>
  );
}
