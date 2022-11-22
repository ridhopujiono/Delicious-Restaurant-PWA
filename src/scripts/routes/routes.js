import Home from '../views/pages/home';
import Detail from '../views/pages/detail';
import Fav from '../views/pages/fav';

const routes = {
  '/': Home, // default page
  '/home': Home,
  '/detail/:id': Detail,
  '/fav': Fav,
};

export default routes;
