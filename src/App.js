import React from 'react';
import { renderRoutes } from 'react-router-config';

const App = ({ route }) => {
  return (
    <div>
      {'App Here'}
      {route && renderRoutes(route.routes)}
    </div>
  );
};

export default { component: App, };
