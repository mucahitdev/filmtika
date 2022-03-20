import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    return (
        <nav className="container flex justify-center items-center py-8 mx-auto bg-transparent">
            <Link href="/">
                <a><h3 className="text-3xl font-bold text-[#5ff59b]">Filmtika</h3></a>
            </Link>
        </nav>
    )
}

export default Navbar