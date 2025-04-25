import { React, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { MdOutlineOpenInNew } from "react-icons/md";

import 'animate.css';
import 'swiper/css';
import 'swiper/css/pagination';
import './services.css';

export default function Services() {
    const [activeSlide, setActiveSlide] = useState(0);
    const [expandedCards, setExpandedCards] = useState({});

    const handleSlideChange = (swiper) => {
        setActiveSlide(swiper.activeIndex);
        setExpandedCards({}); // بستن همه کارت‌ها در اسلاید جدید
    };

    const toggleDetails = (index) => {
        setExpandedCards(prev => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    const services = [
        {
            title: 'ادیت ویدیو',
            description: 'خدمات حرفه‌ای ویرایش و تدوین ویدیو برای ساخت محتوایی تاثیرگذار و جذاب.',
            price: '150'
        },
        {
            title: 'طراحی وب',
            description: 'طراحی رابط کاربری واکنش‌گرا با استفاده از تکنولوژی‌های مدرن و تجربه کاربری عالی.',
            price: '500'
        }
    ];

    return (
        <div className='services__container'>
            <video
                className='services__video animate__animated animate__fadeInLeft'
                src={`/img/Iphone${activeSlide}.webm`}
                autoPlay
                muted
                loop
                playsInline
            ></video>

            <div className="cards__container animate__animated animate__fadeIn">
                <Swiper
                    direction={'vertical'}
                    slidesPerView={1}
                    centeredSlides={true}
                    spaceBetween={900}
                    pagination={{ clickable: true }}
                    modules={[Pagination]}
                    onSlideChange={handleSlideChange}
                    className="mySwiper"
                >
                    {services.map((service, index) => {
                        const isExpanded = expandedCards[index];
                        return (
                            <SwiperSlide key={index}>
                                <div className={`services__card ${isExpanded ? 'expanded' : ''}`}>
                                    <div className='services__card__title'>{service.title}</div>
                                    <div className={`services__card__detail ${isExpanded ? 'animate__animated animate__fadeIn' : 'hidden'}`}>
                                        <div className='services__card__description'>{service.description}</div>
                                        <div className='services__card__price'>شروع از {service.price} <sup>هزارتومان</sup></div>
                                    </div>

                                    <div className='services__card__button'>
                                        <button onClick={() => toggleDetails(index)}>
                                            {isExpanded ? 'بستن' : 'جزئیات'} <MdOutlineOpenInNew />
                                        </button>
                                    </div>
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </div>
    );
}