import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';

import { PrivateRoute, PublicRoute } from './routes';

import Navigation from 'components/Navigation/Navigation';

import { AppBar } from 'components/AppBar/AppBar';
import Modal from 'components/Modal/Modal';

import Register from 'pages/Register';
import Login from 'pages/Login';
import Home from 'pages/Home';

const Currency = lazy(() => import('./pages/Currency'));
const Statistics = lazy(() => import('./pages/Statistics'));

function App() {
  return (
    <main className="App">
      {/* <AppBar />
      <Navigation /> */}
      <Suspense fallBack={<p>...loading</p>}>
        <Routes>
          <Route
            index
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
                <AppBar />/
              </PrivateRoute>
            }
          >
            <Route
              path="home"
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
      <Modal />
    </main>
  );
}

export default App;
