// import { Navigate, Outlet } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

// import useAuth from 'shared/hooks/useAuth';

const PublicRoute = () => {
  //   const isLogin = useAuth();
  //   if (isLogin) {
  //     return <Navigate to="/home" />;
  //   }
  return <Outlet />;
};
export default PublicRoute;
