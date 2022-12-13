import { Routes, Route, Navigate } from 'react-router-dom';

import { Suspense, lazy } from 'react';
import Media from 'react-media';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import * as authOperations from 'redux/auth/auth-operations';
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

  useEffect(() => {
    dispatch(authOperations.current());
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
