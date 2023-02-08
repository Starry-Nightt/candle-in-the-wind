import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper';
import './featured-swiper.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import appClient from '~/shared/utils/appClient';
function Featured() {
  const [featuredList, setFeaturedList] = useState([]);
  useEffect(() => {
    appClient()
      .get('products?limit=16&select=title,price,thumbnail')
      .then((res) => {
        setFeaturedList(res.data.products);
      });
  }, []);

  return (
    <section id="featured">
      <h2 className="section-title">Hot Sale</h2>
      <div>
        <Swiper
          slidesPerView={3}
          slidesPerGroup={2}
          loopfillgroupwithblank="true"
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Navigation, Autoplay]}
        >
          {featuredList.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <article className="item">
                  <div className="item-thumbnail">
                    <img className="item-image" src={item.thumbnail} alt="image" />
                    <span className="item-price">{`FLASH SALE: ${item.price}.000 VNĐ`}</span>
                  </div>
                  <div className="item-body">
                    <h6 className="item-name">{item.title}</h6>
                  </div>
                </article>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}

export default Featured;
