import React from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo'

export default function Navbar() {
  return (
            <div className="flex flex-col md:flex-row items-center md:gap-[60px] gap-[20px] px-[20px] md:px-0">
                <Logo />
                <ul className="flex flex-wrap items-center justify-center md:justify-start gap-5 md:gap-10">
                    <li className="font-semibold text-sm md:text-base transition-all duration-300 hover:text-[#662FFF] text-white">
                        <Link to="#">Home</Link>
                    </li>
                    <li className="font-semibold text-sm md:text-base transition-all duration-300 hover:text-[#662FFF] text-white">
                        <Link to="/pricing">Pricing</Link>
                    </li>
                    <li className="font-semibold text-sm md:text-base transition-all duration-300 hover:text-[#662FFF] text-white">
                        <Link to="#">Features</Link>
                    </li>
                    <li className="font-semibold text-sm md:text-base transition-all duration-300 hover:text-[#662FFF] text-white">
                        <Link to="#">Testimonials</Link>
                    </li>
                </ul>
            </div>
  )
}
