import {  NavLink } from 'react-router-dom';
// import './Navigat<ion.css';
import css from './Navigation.module.css';

const Navigation = () => {
    const getActiveClass = ({isActive}) => { return isActive?css.active:''}
  return (
    <nav>
      <NavLink className={getActiveClass} to='/'>Home</NavLink>
      <NavLink className={getActiveClass} to='/about'>About</NavLink>
      <NavLink className={getActiveClass} to='/articles'>Articles</NavLink>
    </nav>
  );
};

export default Navigation;
