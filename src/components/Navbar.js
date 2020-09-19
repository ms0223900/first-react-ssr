import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTER_ROUTES } from '../constants/Routes';

const NavBar = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to={ROUTER_ROUTES.counter}>
            {'Counter'}
          </Link>
        </li>
        
        <li>
          <Link to={ROUTER_ROUTES.content}>
            {'Content'}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;