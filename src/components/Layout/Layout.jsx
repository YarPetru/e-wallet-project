import { NavLink, Outlet } from 'react-router-dom';

import BalanceInfo from 'components/BalanceInfo';
import s from './Layout.module.scss';

const Layout = () => {
  return (
    <>
      <header className={s.header}>
        <div className={s.container}>
          <nav className={s.navigation}>
            <NavLink
              exact="true"
              to="/"
              className={({ isActive }) => (isActive ? s.activeLink : s.link)}
            >
              My Cards
            </NavLink>
            <NavLink
              to="/add-card"
              className={({ isActive }) => (isActive ? s.activeLink : s.link)}
            >
              Add a new card
            </NavLink>
            <NavLink
              to="/edit-cash"
              className={({ isActive }) => (isActive ? s.activeLink : s.link)}
            >
              Edit my cash
            </NavLink>
          </nav>
        </div>
      </header>
      <main className={`${s.mainSection} ${s.container}`}>
        <div className={s.leftContainer}>
          <BalanceInfo />
        </div>
        <div className={s.rightContainer}>
          <Outlet />
        </div>
      </main>
    </>
  );
};

export default Layout;
