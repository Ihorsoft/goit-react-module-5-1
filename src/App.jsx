import { Routes, Route, NavLink, Link } from "react-router-dom";
import clsx from "clsx";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import NotFound from "./pages/NotFound";
import ProductDetails from "./pages/ProductDetails";
import Mission from "./components/Mission";
import Team from "./components/Team";
import Reviews from "./components/Reviews";
import css from "./App.module.css";

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export const App = () => {
  return (
    <div>
      {/*  <nav className={css.nav}>
        <NavLink to="/" className={buildLinkClass}>
          Home
        </NavLink>
        <NavLink to="/about" className={buildLinkClass}>
          About
        </NavLink>
        <NavLink to="/products" className={buildLinkClass}>
          Products
        </NavLink>
      </nav> */}

      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/products">Products</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}>
          <Route path="mission" element={<Mission />} />
          <Route path="team" element={<Team />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productId" element={<ProductDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
