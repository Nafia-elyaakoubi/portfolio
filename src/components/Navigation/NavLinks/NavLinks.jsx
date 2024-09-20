import s from './NavLinks.module.scss';
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from 'react-icons/ai';
import { CgFileDocument } from 'react-icons/cg';
import { routes } from '../../../routes/BaseRoutes';
import { NavLink } from 'react-router-dom';

const NavLinks = () => {
  return (
    <ul className={s.navBar}>
      <li>
        <NavLink to={routes.HOME} end>
          <AiOutlineHome />
          Accueil
        </NavLink>
      </li>

      <li>
        <NavLink to={routes.ABOUT}>
          <AiOutlineUser />
          À propos
        </NavLink>
      </li>

      <li>
        <NavLink to={routes.PROJECTS}>
          <AiOutlineFundProjectionScreen />
          Projets
        </NavLink>
      </li>

      <li>
        <NavLink to={routes.RESUME}>
          <CgFileDocument />
          CV
        </NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
