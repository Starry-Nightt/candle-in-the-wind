import style from './Header.module.scss';
import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';

const cx = classNames.bind(style);

function Header({ active }) {
  console.log(active.subMenu);
  return (
    <div className={cx('wrapper')}>
      <div className={cx('label')}>{active.label}</div>
      <div className={cx('submenu')}>
        {active.subMenu.map((item, index) => {
          return <NavLink
            key={index}
            className={({ isActive }) => cx('item', { active: isActive })}
            to={item.path}
          >
            {item.label}
          </NavLink>;
        })}
      </div>
    </div>
  );
}

export default Header;
