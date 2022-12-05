import { Routes, Route } from 'react-router-dom';
import { Suspense } from 'react';

import PrivateRoute from 'components/PrivateRoute/PrivateRoute';
import PublicRoute from 'components/PublicRoute/PublicRoute';
import Navigation from 'components/Navigation/Navigation';

import { AppBar } from 'components/AppBar/AppBar';
import Modal from 'components/Modal/Modal';

import Currency from 'pages/Currency';

import Home from 'pages/Home';
import Register from 'pages/Register';
import Login from 'pages/Login';



function App() {
  return (
    <div className="App">
      <AppBar />
      <Navigation />
      <Suspense fallBack={<p>...loading</p>}>
        <Routes>
          <Route element={<PublicRoute />}>
            <Route index path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>
          <Route element={<PrivateRoute />}>
            <Route path="/home" element={<Home />} />
            <Route path="/statistics" element={<h1>Statistics page</h1>} />
            <Route path="/currency" element={<Currency/>} />
          </Route>
          <Route path="*" element={<p>Not Found page</p>} />
        </Routes>
      </Suspense>
      <Modal />
    </div>
  );
}

export default App;
