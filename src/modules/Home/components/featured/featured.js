import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper';
import './featured-swiper.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import appClient from '~/shared/utils/appClient';
import Spinner from '~/shared/components/spinner/spinner';
function Featured() {
  const [featuredList, setFeaturedList] = useState([]);
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(prev => true)
    appClient()
      .get('products?limit=16&select=title,price,thumbnail')
      .then((res) => {
        setFeaturedList(res.data.products);
        setLoading(prev => false)
      });
  }, []);

  return (
    <section id="featured">
      <h2 className="section-title">Hot Sale</h2>
      {loading && <Spinner color={'#015394'} size={8} />}
      <div>
        <Swiper
          slidesPerView={1}
          slidesPerGroup={1}
          breakpoints={{
            740: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
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
                    <img className="item-image" src={item.thumbnail} alt="" />
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
