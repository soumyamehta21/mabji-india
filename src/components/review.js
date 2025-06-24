'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';

const reviews = [
  {
    image: '/r1.webp',
    text: 'The ring came out absolutely stunning, and the bride-to-be loved it! Stellar communication from the seller.',
    date: 'Verified Purchase on 24/11/2023',
    name: 'Archon Co',
  },
  {
    image: '/r2.webp',
    text: 'My boyfriend was skeptical at first. This ring is PERFECT. It is so shiny and the detail is gorgeous.',
    date: 'Verified Purchase on 15/11/2023',
    name: 'Hunter',
  },
  {
    image: '/r3.webp',
    text: 'All expectations were once again met with Ankit on this custom diamond bracelet and necklace.',
    date: 'Verified Purchase on 28/11/2023',
    name: 'Marlene',
    readMore: true,
  },
  {
    image: '/r5.jpeg',
    text: 'From the beginning, working with Ankit and his team has been a dream. I was initially skeptical...',
    date: 'Verified Purchase on 28/12/2023',
    name: 'Lydia McDonald',
    readMore: true,
  },
];

export default function ReviewCarousel() {
  return (
    <section className="bg-white py-16 text-center">
      <h2 className="text-3xl font-serif mb-2">Customer Reviews</h2>
      <div className="text-yellow-500 text-2xl mb-1">★★★★★</div>
      <p className="text-gray-600 mb-10 text-sm">
        3460+ Verified Reviews with an Average Rating of 4.98 Stars
      </p>

      <div className="max-w-7xl mx-auto px-4">
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1280: {
              slidesPerView: 4,
            },
          }}
        >
          {reviews.map((review, idx) => (
            <SwiperSlide key={idx}>
              <div className="bg-white rounded-lg border p-4 h-full flex flex-col items-center text-center">
                <Image
                  src={review.image}
                  alt={review.name}
                  width={250}
                  height={250}
                  className="rounded-md object-cover mb-4"
                />
                <p className="text-sm text-gray-700 mb-4">
                  {review.text}
                  {review.readMore && (
                    <span className="text-blue-600 hover:underline cursor-pointer ml-1">
                      Read more
                    </span>
                  )}
                </p>
                <p className="text-xs text-gray-500">{review.date}</p>
                <em className="text-sm text-gray-700">{review.name}</em>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
