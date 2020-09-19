import React from 'react';
import { renderToString } from 'react-dom/server';
import { Route, StaticRouter } from 'react-router';
import { renderRoutes } from 'react-router-config';
import Counter from '../../components/Counter';
import Routes from '../../constants/Routes';

const renderer = (req, res) => {
  const renderedContent = renderToString(
    <StaticRouter location={req.path}>
      <div>{renderRoutes(Routes)}</div>
    </StaticRouter>
  );

  return renderedContent;
};

export default renderer;