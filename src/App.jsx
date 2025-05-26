import './App.scss';
import { Route, Routes, useLocation } from 'react-router-dom';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";
import Cart from "./pages/Cart/Cart";
import NotFound from "./pages/NotFound/NotFound";
import 'bootstrap/dist/css/bootstrap.css';
import Product from './pages/Product/Product';
import Connect from './components/Connect/Connect';
import Contact from './components/Contact/Contact';
import Admin from './admin/App';

function App() {
  const location = useLocation();
  const isAdminPage = location.pathname.startsWith('/admin');

  return (
    <>
      {/* Faqat admin bo'lmagan sahifalar uchun header/footer/contacts */}
      {!isAdminPage && <Header />}

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      {!isAdminPage && (
        <>
          <Connect />
          <Contact />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
