import { Suspense, lazy, useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import SignIn from '../Authentication/SignIn';
import SignUp from '../Authentication/SignUp';
import Loader from '../common/Loader';
import Users from './pages/Users';
import Cities from './pages/Cities';

const Profile = lazy(() => import('./pages/Profile'));
const DefaultLayout = lazy(() => import('./layout/DefaultLayout'));

function Index() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <BrowserRouter>
      <Routes>
        <Route path="/auth/signin" element={<SignIn />} />
        <Route path="/auth/signup" element={<SignUp />} />
        <Route element={<DefaultLayout />}>
          <Route index element={<Home />} />
          <Route
            path="/users"
            element={
              <Suspense fallback={<Loader />}>
                <Users />
              </Suspense>
            }
          />
          <Route
            path="/cities"
            element={
              <Suspense fallback={<Loader />}>
                <Cities />
              </Suspense>
            }
          />
          <Route
            path="/profile"
            element={
              <Suspense fallback={<Loader />}>
                <Profile />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Index;
