import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';

import PrivateRoute from 'components/PrivateRoute/PrivateRoute';
import PublicRoute from 'components/PublicRoute/PublicRoute';
import Navigation from 'components/Navigation/Navigation';
import { AppBar } from 'components/AppBar/AppBar';

import Register from 'pages/Register';
import Login from 'pages/Login';

const Currency = lazy(() => import('./pages/Currency'));
const Statistics = lazy(() => import('./pages/Statistics'));

function App() {
  return (
    <main className="App">
      <AppBar />
      <Navigation />
      <Suspense fallBack={<p>...loading</p>}>
        <Routes>
          <Route element={<PublicRoute />}>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Route>
          <Route element={<PrivateRoute />}>
            <Route path="/home" element={<h1>Home page</h1>} />
            <Route path="/statistics" element={<Statistics />} />
            <Route path="/currency" element={<Currency />} />
          </Route>
          <Route path="*" element={<p>Not Found page</p>} />
        </Routes>
      </Suspense>
    </main>
  );
}

export default App;
