import { Routes, Route } from 'react-router-dom';
import { Suspense } from 'react';

import './App.css';
import Navigation from 'components/Navigation/Navigation';
import PrivateRoute from 'components/PrivateRoute/PrivateRoute';
import PublicRoute from 'components/PublicRoute/PublicRoute';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Suspense fallBack={<p>...loading</p>}>
        <Routes>
          <Route element={<PublicRoute />}>
            <Route path="/register" element={<h1>Register page</h1>} />
            <Route path="/login" element={<h1>Login page</h1>} />
          </Route>
          <Route element={<PrivateRoute />}>
            <Route path="/home" element={<h1>Home page</h1>} />
            <Route path="/statistics" element={<h1>Statistics page</h1>} />
            <Route path="/currency" element={<h1>Currency page</h1>} />
          </Route>
          <Route path="*" element={<h1>Not found page</h1>} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
