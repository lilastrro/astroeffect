import React from 'react'
import { RiTelegram2Line, RiInstagramLine, RiTwitterXFill } from "react-icons/ri";
import { FaGithub, FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

import './contact.css'
import 'animate.css';

export default function contact() {
    return (
        <div className='about'>
            <div className="email__container animate__animated animate__zoomIn delay-two">
                <div>
                    <h1>ایمیل</h1>
                    <p style={{ fontSize: '1.3rem', textDecoration: "underline" }}>astrroeffect@gmail.com</p>
                </div>
                <button className='email-button'> <a href="mailto: astrroeffect@gmail.com"> <MdOutlineEmail /> ایمیل بزنید </a> </button>
            </div>
            <div className="phone__container animate__animated animate__zoomIn delay-one">
                <div>
                    <h1>تلفن</h1>
                    <p style={{ fontSize: '1.5rem', textDecoration: "underline" }}>09123456789</p>
                </div>
                <button className='phone-button'> <a href="tel: 09218243625"> <FaPhoneAlt /> تماس بگیرید  </a> </button>
            </div>
            <div className="social__container animate__animated animate__zoomIn">
                <h1>فضای مجازی</h1>
                <ul>
                    <li><a href="#" target='_blank'><RiTwitterXFill className='social-icon' /></a></li>
                    <li><a href="#" target='_blank'><RiInstagramLine className='social-icon' /></a></li>
                    <li><a href="https://github.com/lilastrro" target='_blank'><FaGithub className='social-icon' /></a></li>
                    <li><a href="https://wa.me/09218243625" target='_blank'><FaWhatsapp className='social-icon' /></a></li>
                    <li><a href="https://t.me/AstroEffect" target='_blank'><RiTelegram2Line className='social-icon' /></a></li>
                </ul>
            </div>
        </div>
    )
}