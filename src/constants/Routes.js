import App from "../App";
import Content from "../components/Content";
import Counter from "../components/Counter";
import NotFoundPage from "../components/NotFoundPage";

export const ROUTER_ROUTES = {
  homepage: '/',
  counter: '/counter',
  content: '/content',
};

const Routes = [{
  ...App,
  routes: [
    {
      path: ROUTER_ROUTES.homepage,
      component: () => 'HomePage Here',
      exact: true,
    },
    {
      path: ROUTER_ROUTES.counter,
      component: Counter,
    },
    {
      path: ROUTER_ROUTES.content,
      component: Content,
    },
    {
      component: NotFoundPage,
    }
  ]
}];

export default Routes;