import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';
import NewInvoice from '../pages/NewInvoice';
import Signup from '../pages/Signup';
import Statistics from '../pages/Statistics';
import TwoFactor from '../pages/TwoFactor';
import ViewInvoice from '../pages/ViewInvoice';
import Error404 from '../pages/Error404';

const routes = {
  '/': Login,
  '/dash': Dashboard,
  '/gen': NewInvoice,
  '/signup': Signup,
  '/stats': Statistics,
  '/2fa': TwoFactor,
  '/view/:id': ViewInvoice,
  '/error': Error404
};

export default routes;