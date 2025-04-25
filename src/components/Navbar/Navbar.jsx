import { React } from 'react'
import { IoHomeOutline, IoCallOutline } from "react-icons/io5";
import { MdOutlineWorkOutline } from "react-icons/md";
import { TbInfoTriangle } from "react-icons/tb";

import 'animate.css';
import './Navbar.css';

export default function Navbar() {
    return (
        <nav className='animate__animated animate__fadeInUp'>
            <ul className='navbar'>
                <li><a href="/"><IoHomeOutline className='navbar-icon' /></a></li>
                <li><a href="/about"><TbInfoTriangle className='navbar-icon' /></a></li>
                <li><a href="/contact"><IoCallOutline className='navbar-icon' /></a></li>
                <li><a href="/services"><MdOutlineWorkOutline className='navbar-icon' /></a></li>
            </ul>
        </nav>
    )
}