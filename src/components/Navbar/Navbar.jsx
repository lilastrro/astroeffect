import { React } from 'react'
import { IoHomeOutline, IoCallOutline } from "react-icons/io5";
import { MdOutlineWorkOutline } from "react-icons/md";
import { TbInfoTriangle } from "react-icons/tb";
import { Link } from 'react-router-dom';

import 'animate.css';
import './Navbar.css';

export default function Navbar() {
    return (
        <nav className='animate__animated animate__fadeInUp'>
            <ul className='navbar'>
                <li><Link to="/"><IoHomeOutline className='navbar-icon' /></Link></li>
                <li><Link to="/about"><TbInfoTriangle className='navbar-icon' /></Link></li>
                <li><Link to="/contact"><IoCallOutline className='navbar-icon' /></Link></li>
                <li><Link to="/services"><MdOutlineWorkOutline className='navbar-icon' /></Link></li>
            </ul>
        </nav>
    )
}