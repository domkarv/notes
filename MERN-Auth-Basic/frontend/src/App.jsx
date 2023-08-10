import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Navbar from './components/Navbar';
import SignUpForm from './pages/SignUpForm';
import LogInForm from './pages/LogInForm';
import NotFound from './pages/NotFound';
import Home from './pages/Home';

export default function App() {
  const user = useSelector((state) => state.user);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route
              path="/"
              element={!user ? <Navigate to={'/signup'} /> : <Home />}
            />
            <Route
              path="/signup"
              element={!user ? <SignUpForm /> : <Navigate to={'/'} />}
            />
            <Route
              path="/login"
              element={!user ? <LogInForm /> : <Navigate to={'/'} />}
            />
            <Route path=":params" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}
