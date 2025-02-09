import React from 'react'
import Link from 'next/link';

const page = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
        <ul className="flex justify-center space-x-6">
        <Link href="#" className="hover:underline"><li>Home</li></Link>
        <Link href="#" className="hover:underline"><li>Blog</li></Link>
        <Link href="/About" className="hover:underline"><li>About</li></Link>
        <Link href="/Contact" className="hover:underline"><li>Contact</li></Link>
        </ul>
      </nav>
  )
}

export default page;