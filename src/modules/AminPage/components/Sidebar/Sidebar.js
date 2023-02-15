import classNames from 'classnames/bind';
import style from './Sidebar.module.scss';
import avatar from '~/assets/images/avatar-default.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { logout } from '~/redux/user-profile/user-profile.thunk';

const cx = classNames.bind(style);

function Sidebar({ menu, setActive }) {
  const { user } = useSelector((state) => state.userProfile);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className={cx('wrapper')}>
      <div className={cx('logo')}>Candle In The Wind</div>
      <div className={cx('user')}>
        <img src={user?.image || avatar} alt="Loading" />
        <span>{user?.username || 'Admin'}</span>
      </div>

      <div className={cx('menu')}>
        {menu.map((item, index) => {
          return (
            <NavLink
              key={index}
              className={({ isActive }) => cx('item', { active: isActive })}
              to={item.path}
              onClick={() => setActive(item)}
            >
              {item.icon && <span className={cx('icon')}>{item.icon}</span>}
              {item.label}
            </NavLink>
          );
        })}
        <div
          className={cx('item', 'logout')}
          onClick={() => {
            dispatch(logout());
            navigate('/home');
          }}
        >
          Đăng xuất
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
