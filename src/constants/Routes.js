const { default: App } = require("../App");
const { default: Counter } = require("../components/Counter");
const { default: NotFoundPage } = require("../components/NotFoundPage");

const Routes = [{
  ...App,
  routes: [
    {
      component: Counter,
      path: '/counter',
    },
    {
      component: NotFoundPage,
    }
  ]
}];

export default Routes;