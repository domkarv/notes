import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Errors from "./pages/Errors";
import Nav from "./pages/Nav";
import Document from "./pages/Document";
import Default from "./pages/Default";
import SingleProduct from "./pages/SingleProduct";
import Login from "./pages/Login";
import User from "./pages/User";
import ProtectedRoute from "./pages/ProtectedRoute";

export default function App() {
  const [user, setUser] = useState(null);

  return (
    <BrowserRouter>
      <Nav />
      {/*
      Note the position where 'Nav' is placed, outside the 'Routes' component.
      You can also add 'Footer' component after closing 'Routes' component.
      Now this 'Nav' will be rendered on all the routes.
      */}
      <Routes>
        {/* <Route index element={<Home />} /> */}
        <Route path="/" element={<Home />}>
          {/* This is nesting of routes, here components of nested routes will be rendered on
          component of parent route only (here parent route is '/' and component of parent route is 'Home')
          This will be done by 'Outlet' component, this is required in parent component.
          Position of 'Outlet' component in parent component decides where this nested components will be renderd */}
          <Route index element={<Default />} />
          {/* If you use 'index' route in nested routes, then component mentioned with index route will be renderd by default */}
          <Route path="/products" element={<Products />} />
          <Route path="/products/:productId" element={<SingleProduct />} />
          {/* Here productId is parameter  */}
          <Route path="/about" element={<About />} />
        </Route>

        <Route path="/login" element={<Login setUser={setUser} />} />
        {/* <Route path="/user" element={<User user={user} />} /> */}
        <Route /* this will be rendered if user is logined (it will be checked in 'ProtectedRoute') */
          path="/user"
          element={
            <ProtectedRoute user={user}>
              <User user={user} />
            </ProtectedRoute>
          }
        />

        <Route path="document" element={<Document />} />
        <Route path="*" element={<Errors />} />
      </Routes>
    </BrowserRouter>
  );
}

/*
*****

* Also learn about 'NavLink' Components in react-router-dom

Routes and Route are two different components.
- Routes is a parent component.
- Route is a child component.

1. <Route index element={<Home />} /> // (this is defalut route)(Works good for nested routes)
2. <Route path="/" element={<Home />} />
- Both them are almost same.
- When both 1st and 2nd are present, then 1st will be rendered.
- 'index' prop has higher priority than 'path' prop.
- You can use any of them.
- But when both of them are used then the Route having 'index' prop will be rendered as home route.

<Route path="*" element={<Errors />} />
- '*' means any route. (any other except mentioned ones)
- It will be rendered when no route is matched.

In home page we have used 'Outlet' component.
- It will render the child routes of the current route.

*****
*/
