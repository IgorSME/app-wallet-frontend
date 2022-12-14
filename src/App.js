import { lazy, Suspense, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Media from 'react-media';
import { useDispatch, useSelector } from 'react-redux';

import * as authOperations from 'redux/auth/auth-operations';
import { getAccessToken } from 'redux/selectors';

import { PrivateRoute, PublicRoute } from './routes';

import { Loader } from 'components';

const Register = lazy(() => import('./pages/Register'));
const Login = lazy(() => import('./pages/Login'));
const DashboardPage = lazy(() => import('./pages/DashboardPage'));
const Home = lazy(() => import('./pages/Home'));
const Statistics = lazy(() => import('./pages/Statistics'));
const Currency = lazy(() => import('./pages/Currency'));
const NotFound = lazy(() => import('pages/NotFound'));

function App() {
  const dispatch = useDispatch();
  const accessToken = useSelector(getAccessToken);

  useEffect(() => {
    if (accessToken) {
      dispatch(authOperations.current());
    }
    // eslint-disable-next-line
  }, [dispatch]);

  return (
    <Suspense fallBack={<Loader />}>
      <Routes>
        <Route
          path="/login"
          element={
            <PublicRoute restricted>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoute restricted>
              <Register />
            </PublicRoute>
          }
        />

        <Route
          path="/"
          element={
            <PrivateRoute>
              <DashboardPage />
            </PrivateRoute>
          }
        >
          <Route
            index
            path="/home"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route
            path="statistics"
            element={
              <PrivateRoute>
                <Statistics />
              </PrivateRoute>
            }
          />
          <Route
            path="currency"
            element={
              <PrivateRoute>
                <Media query="(max-width: 767px)">
                  {matches =>
                    matches ? <Currency /> : <Navigate to="/home" />
                  }
                </Media>
              </PrivateRoute>
            }
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}

export default App;
