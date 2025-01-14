'use client'
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link';

const Navbar = () => {
    const { data: session } = useSession();

    return (
        <nav className='flex justify-between px-12 bg-gray-950 text-white py-6'>
            <h1 className='font-bold text-2xl first-letter:text-pink-400'>Donation Raising App</h1>
            <div className='flex gap-5 justify-center items-center'>
                <ul className='flex gap-5'>
                    <Link href={'/'}>Home</Link>
                    <li>About</li>
                    <li>Contact</li>
                </ul>

                <div>
                    {session && <Link href={'/dashboard'}>   <button
                        type="button"
                        className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-2  focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 transition-all"
                    >
                        Dashboard
                    </button> </Link>}

                    {session && <button
                        type="button"
                        className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-2  focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 transition-all"
                        onClick={() => signOut()}
                    >
                        Logout
                    </button>}

                    {!session && <Link href={'/login'}>
                        <button
                            type="button"
                            className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-2  focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 transition-all"
                        >
                            Sign In
                        </button>
                    </Link>}




                </div>
            </div>
        </nav>
    );
}

export default Navbar;