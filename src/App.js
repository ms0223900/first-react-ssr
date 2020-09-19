import React from 'react';
import { renderRoutes } from 'react-router-config';
import NavBar from './components/Navbar';

const App = ({ route=null }) => {
  if(!route) {
    return (
      <div>
        <NavBar />
      </div>
    );
  }
  
  return (
    <div>
      <NavBar />
      {route && renderRoutes(route.routes)}
    </div>
  );
};

export default { component: App, };
