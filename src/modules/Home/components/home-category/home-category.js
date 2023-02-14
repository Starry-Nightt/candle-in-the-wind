import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HomeCategory as category } from '~/assets/assets';
import style from './home-category.module.scss';
import { categoryList } from '~/layout/header/components/category/category';
function HomeCategory() {
  const navigate = useNavigate();

  const onViewCategory = (path) => {
    navigate(path);
  };
  return (
    <div>
      <h2 className="section-title text-center">Shop By Category</h2>
      <div className="row">
        {category.map((item, idx) => {
          return (
            <div className="col l-2 m-4 c-4" key={idx}>
              <article
                className={`${style.item}`}
                onClick={() => onViewCategory(categoryList[(idx + 1) % categoryList.length].path)}
              >
                <div className={` ${style.itemImage}`}>
                  <img src={item.image} alt="" />
                </div>
                <div className={` ${style.itemBody}`}>
                  <h6 className={` ${style.itemName}`}>{item.name}</h6>
                </div>
              </article>
            </div>
          );
        })}
      </div>
      <div className="py-5 flex justify-center align-center">
        <button
          className="button primary-button text-base px-4"
          onClick={() => onViewCategory(categoryList[0].path)}
        >
          Xem tất cả
        </button>
      </div>
    </div>
  );
}

export default HomeCategory;
