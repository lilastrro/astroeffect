import { React } from 'react'
import { FaHtml5 } from "react-icons/fa";
import { SiCss3, SiJavascript, SiReact, SiAdobepremierepro } from "react-icons/si";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'animate.css';
import 'swiper/css';
import 'swiper/css/pagination';
import './about.css'

let skillsArray = [
    { name: "Adobe Premiere Pro", icon: <SiAdobepremierepro className='about__card-icon' />, rate: "Expert" },
    { name: "React", icon: <SiReact className='about__card-icon' />, rate: "Beginner" },
    { name: "HTML", icon: <FaHtml5 className='about__card-icon' />, rate: "Expert" },
    { name: "CSS", icon: <SiCss3 className='about__card-icon' />, rate: "Expert" },
    { name: "JavaScript", icon: <SiJavascript className='about__card-icon' />, rate: "Expert" },
]

export default function About() {
    return (
        <div className='about__container'>
            <Swiper
                direction={'vertical'}
                slidesPerView={'auto'}
                centeredSlides={true}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {skillsArray.map((skill, index) => (
                    <SwiperSlide key={index}>
                        <div className="about__card animate__animated animate__zoomIn">
                            <div className="about__card-head">
                                <span className='about__card-icon'>{skill.icon}</span>
                                <h1 className='about__card-title'>{skill.name}</h1>
                            </div>
                            <p className='about__card-rate'>
                                {skill.rate}
                            </p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}
