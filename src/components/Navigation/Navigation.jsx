import { NavLink } from 'react-router-dom';

import Home from 'images/home.svg';
import Statistics from 'images/statistics.svg';
import Currency from 'images/currency.svg';
import styles from './Navigation.module.css';

// const getClassName = ({ isActive }) => {
//   const className = isActive ? `${styles.link} ${styles.active}` : styles.link;
//   return className;
// };

const Navigation = () => {
  return (
    <>
      <ul className={styles.navigation}>
        <li className={styles.home}>
          <NavLink to="/home" className={styles.link}>
            <img src={Home} alt="home-svg" className={styles.svg} />
            <p className={styles.imgText}>Home</p>
          </NavLink>
        </li>
        <li className={styles.statistics}>
          <NavLink to="/statistics" className={styles.link}>
            <img src={Statistics} alt="statistics-svg" className={styles.svg} />
            <p className={styles.imgText}>Statistics</p>
          </NavLink>
        </li>
        <li className={styles.currency}>
          <NavLink to="/currency">
            <img src={Currency} alt="currency-svg" className={styles.svg} />
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default Navigation;
