import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import * as authOperations from 'redux/auth/auth-operations';
import { PrivateRoute, PublicRoute } from './routes';

import { AppBar } from 'components/AppBar/AppBar';

const Register = lazy(() => import('./pages/Register'));
const Login = lazy(() => import('./pages/Login'));
const Home = lazy(() => import('./pages/Home'));
const Currency = lazy(() => import('./pages/Currency'));
const Statistics = lazy(() => import('./pages/Statistics'));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.current());
  }, [dispatch]);
  return (
    <main className="App">
      <Suspense fallBack={<p>...loading</p>}>
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
            path="/home"
            element={
              <PrivateRoute>
                <AppBar />
              </PrivateRoute>
            }
          >
            <Route
              index
              element={
                <PrivateRoute>
                  <Home />/
                </PrivateRoute>
              }
            />
            <Route
              path="statistics"
              element={
                <PrivateRoute>
                  <Statistics />/
                </PrivateRoute>
              }
            />
            <Route
              path="currency"
              element={
                <PrivateRoute>
                  <Currency />/
                </PrivateRoute>
              }
            />
          </Route>
          <Route path="*" element={<p>Not Found page</p>} />
        </Routes>
      </Suspense>
    </main>
  );
}

export default App;
