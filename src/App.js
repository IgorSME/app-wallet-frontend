import { Routes, Route } from 'react-router-dom';
import { Suspense } from 'react';

import PrivateRoute from 'components/PrivateRoute/PrivateRoute';
import PublicRoute from 'components/PublicRoute/PublicRoute';
import Navigation from 'components/Navigation/Navigation';
import Login from 'pages/Login';
import Currency from 'pages/Currency';
import Home from 'pages/Home';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Suspense fallBack={<p>...loading</p>}>
        <Routes>
          <Route element={<PublicRoute />}>
            <Route path="/" element={<h1>Welcome page</h1>} />
            <Route path="/register" element={<h1>Register page</h1>} />
            <Route path="/login" element={<Login />} />
          </Route>
          <Route element={<PrivateRoute />}>
            <Route path="/home" element={<Home />} />
            <Route path="/statistics" element={<h1>Statistics page</h1>} />
            <Route path="/currency" element={<Currency />} />
          </Route>
          <Route path="*" element={<p>Not Found page</p>} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
