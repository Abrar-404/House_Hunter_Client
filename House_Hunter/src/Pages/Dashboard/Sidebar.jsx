import '../../Components/Styles/sidebar.css';
import React, { useContext, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faCompass,
  faUsers,
  faCogs,
  faServer,
  faCloud,
  faHome,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import cx from 'classnames';

const menuItems = [
  { title: 'Home', icon: faHome, path: '/' },
  { title: 'Owned Houses', icon: faUsers, path: '/dashboard' },
  { title: 'Listed Houses', icon: faCompass, path: '/listedhouses' },
  { title: 'Add New House', icon: faHome, path: '/addhouse' },
  { title: 'Rent a House', icon: faHome, path: '/renthouse' },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={cx('sidebar', { 'sidebar-closed': !isOpen })}>
      <div className="">
        <img
          className="rounded-full border-2 w-[40px] h-[40px] mb-2"
          src=""
          alt=""
        />
        <h1 className="text-xs mb-10">name</h1>
      </div>
      <button className={'sidebar__button'} onClick={() => setIsOpen(!isOpen)}>
        <FontAwesomeIcon icon={faBars} />
      </button>
      <ul>
        {menuItems.map(item => (
          <li key={item.title}>
            <Link to={item.path} className={'sidebar__listItem'}>
              <div>
                <FontAwesomeIcon className={'sidebar__icon'} icon={item.icon} />
                <CSSTransition
                  in={isOpen}
                  timeout={200}
                  classNames={'fade'}
                  unmountOnExit
                >
                  <span>{item.title}</span>
                </CSSTransition>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
