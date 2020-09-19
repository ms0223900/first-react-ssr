import React from 'react';
import { renderToString } from 'react-dom/server';
import { Route, StaticRouter } from 'react-router';
import { renderRoutes } from 'react-router-config';
import Counter from '../../components/Counter';
import Routes, { ROUTER_ROUTES } from '../../constants/Routes';
import NotFoundPage from '../../components/NotFoundPage';
import App from '../../App';

const renderer = (req, res) => {
  // console.log(req.path);
  const rendered = (
    <StaticRouter location={req.path}>
      <Route
        path={ROUTER_ROUTES.homepage}
        component={App.component}
      />
      {/* <div>{renderRoutes(Routes)}</div> */}
    </StaticRouter>
  );
  console.log(renderRoutes(Routes));
  const renderedContent = renderToString(rendered);

  return renderedContent;
  // return 'something wrong :(';
};

export default renderer;