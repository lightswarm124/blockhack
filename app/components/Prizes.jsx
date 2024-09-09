"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper/modules";
import { prizesData } from "../data/prizesData";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Prizes() {
  return (
    <section id="prizes" className="py-20 px-4 md:px-20 bg-background">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">Hackathon Prizes</h2>
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            1024: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 2,
            },
            0: {
              slidesPerView: 1,
            },
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          scrollbar={{
            el: ".swiper-scrollbar",
            draggable: true,
            hide: true,
          }}
          modules={[Navigation, Pagination, Scrollbar, Autoplay]}
          className="mySwiper"
        >
          {prizesData.map((prize, index) => (
            <SwiperSlide key={index} className="p-4">
              <div className="bg-white p-4 rounded-lg shadow-lg h-full flex flex-col justify-center items-center">
                <div className="relative w-full h-40">
                  <Image
                    alt={`prize-image-${index}`}
                    src={prize.sponsorImage}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 200px"
                    className="rounded-lg object-contain"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {prize.name}
                  </h3>
                  <p className="text-sm text-gray-700 text-center mt-2">
                    {prize.description}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}

          {/* Add Navigation */}
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>

          {/* Add Scrollbar */}
          <div className="swiper-scrollbar"></div>
        </Swiper>
      </div>
    </section>
  );
}
