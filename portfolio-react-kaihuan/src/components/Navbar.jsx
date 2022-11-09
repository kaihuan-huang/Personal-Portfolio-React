import React from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import Logo from '../assets/logo.png'

const Navbar = () => {
    return (
    <div>
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
            <div>
                {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                <img src={Logo} alt="Logo Image" style={{ width: '100px' }} />
            </div>
        </div>
        <div>
                <ul className='flex'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Skill</li>
                    <li>Work</li>
                    <li>Contact</li>
                </ul>
        </div>
         <div className='hidden'>
                <FaBars />
        </div>
            <div className='hidden'>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Skill</li>
                    <li>Work</li>
                    <li>Contact</li>
                </ul>
            </div>

    </div>
)}

export default Navbar