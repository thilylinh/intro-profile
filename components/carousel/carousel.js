import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Image from "next/image";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default function CarouselMulti() {
  return (
    <Carousel responsive={responsive}>
      <div className="slider-item">
        <div className="single-review swiper-slide">
          <div className="review-header d-flex justify-content-between">
            <div className="review-client">
              <div className="media">
                <Image
                  src="/avatar/client-1.jpg"
                  height="150"
                  width="150"
                  className="img-fluid rounded-circle client-avatar"
                />

                <div className="client-details">
                  <h6 className="client-name">Julia Sakura</h6>
                  <span className="client-role">Envato Customer</span>
                </div>
              </div>
            </div>
            <i className="icon ion-md-quote review-icon"></i>
          </div>
          <p className="review-content">
            Emma did an excellent creative job, addressing our request quickly,
            and also providing her own graphic insight, being open to feedback
            and changes or edits when they arose. She worked with us the entire
            way. Highly recommended.
          </p>
        </div>
      </div>
      <div className="slider-item">
        <div className="single-review swiper-slide">
          <div className="review-header d-flex justify-content-between">
            <div className="review-client">
              <div className="media">
                <Image
                  src="/avatar/client-2.jpg"
                  height="150"
                  width="150"
                  className="img-fluid rounded-circle client-avatar"
                />
                <div className="client-details">
                  <h6 className="client-name">John Santana</h6>
                  <span className="client-role">Entrepreneur</span>
                </div>
              </div>
            </div>
            <i className="icon ion-md-quote review-icon"></i>
          </div>
          <p className="review-content">
            Emma did an excellent creative job, addressing our request quickly,
            and also providing her own graphic insight, being open to feedback
            and changes or edits when they arose. She worked with us the entire
            way. Highly recommended.
          </p>
        </div>
      </div>
      <div className="slider-item">
        <div className="single-review swiper-slide">
          <div className="review-header d-flex justify-content-between">
            <div className="review-client">
              <div className="media">
                <Image
                  src="/avatar/client-3.jpg"
                  height="150"
                  width="150"
                  className="img-fluid rounded-circle client-avatar"
                />
                <div className="client-details">
                  <h6 className="client-name">Maria Wilson</h6>
                  <span className="client-role">Envato Customer</span>
                </div>
              </div>
            </div>
            <i className="icon ion-md-quote review-icon"></i>
          </div>
          <p className="review-content">
            Emma did an excellent creative job, addressing our request quickly,
            and also providing her own graphic insight, being open to feedback
            and changes or edits when they arose. She worked with us the entire
            way. Highly recommended.
          </p>
        </div>
      </div>
    </Carousel>
  );
}
