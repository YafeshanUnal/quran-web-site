import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

export const HomePageCarousel = () => {
  const images = Array.from({ length: 5 }, (_, index) => ({
    src: `/image-${index + 1}.jpg`,
    alt: `image-${index + 1}`,
    legend: `legend-${index + 1}`,
  }));

  return (
    <Carousel
      className="h-[500px] "
      showArrows
      showStatus={false}
      autoPlay
      infiniteLoop
      showIndicators
      interval={3000}
    >
      {images.map((image, index) => (
        <div key={index} className="">
          <div className="">
            <Image
              width={400}
              height={400}
              src={image.src}
              alt={image.alt}
              className="object-cover max-h-[500px]"
            />
          </div>
        </div>
      ))}
    </Carousel>
  );
};
