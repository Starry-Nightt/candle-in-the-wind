import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper';
import './featured-swiper.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import appClient from '~/shared/utils/appClient';
import Spinner from '~/shared/components/spinner/spinner';
import { useNavigate } from 'react-router-dom';
import { DollarCurrency } from '~/shared/utils/currency';
import productService from '~/shared/services/product.service';
function Featured() {
  const [featuredList, setFeaturedList] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    setLoading((prev) => true);
    productService.getAllProduct().then((res) => {
      const tmp = res.data.products.filter((item) => Number(item.price) <= 200000);
      setFeaturedList(tmp);
      setLoading((prev) => false);
    });
  }, []);

  const onSelectProduct = (id) => {
    navigate(`/products/all/${id}`);
  };

  return (
    <section id="featured">
      <h2 className="section-title text-center">Hot Sale</h2>
      {loading ? (
        <Spinner color={'#015394'} size={8} />
      ) : (
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
                <SwiperSlide key={item.ID_Product}>
                  <article
                    className="item bg-white"
                    onClick={() => onSelectProduct(item.ID_Product)}
                  >
                    <div className="item-thumbnail">
                      <img className="item-image" src={item.thumbnail} alt="" />
                      <span className="item-price">{`FLASH SALE: ${DollarCurrency(
                        item.price,
                      )}`}</span>
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
      )}
    </section>
  );
}

export default Featured;
