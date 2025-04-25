import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

import './home.css';

export default function Home() {
    return (
        <div className="home">
            <h1 className="home__static"> من <span>مانی‌ام !</span></h1>
            <h1>
                <Typewriter
                    words={['طراح وب', 'و ادیتور ویدیو']}
                    loop={false}
                    cursor
                    cursorStyle="|"
                    typeSpeed={100}  // سرعت تایپ
                    deleteSpeed={50} // سرعت حذف
                    delaySpeed={500} // تاخیر بین تایپ‌ها
                />
            </h1>
        </div>
    );
}
