import React, { useState, useEffect } from 'react';
import './admin.scss';
import './login.scss';

const CORRECT_EMAIL = 'mebel@gmail.com';
const CORRECT_PASSWORD = 'mebel12345';

function Admin() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [products, setProducts] = useState([]);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('products')) || [];
    setProducts(saved);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === CORRECT_EMAIL && password === CORRECT_PASSWORD) {
      setIsLoggedIn(true);
      setError('');
    } else {
      setError('Email yoki parol noto‘g‘ri!');
    }
  };

  const handleAddProduct = (e) => {
    e.preventDefault();

    const newProduct = {
      id: Date.now(),
      name,
      price,
      image,
    };

    const updated = [...products, newProduct];
    setProducts(updated);
    localStorage.setItem('products', JSON.stringify(updated));

    setName('');
    setPrice('');
    setImage('');
  };

  if (!isLoggedIn) {
    return (
      <div className="login-container">
        <h2>Admin Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Parol"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && <p className="error">{error}</p>}
          <button type="submit">Kirish</button>
        </form>
      </div>
    );
  }

  return (
    <div className="admin-container">
      <h2>Admin Panel</h2>
      <form onSubmit={handleAddProduct}>
        <input
          type="text"
          placeholder="Mebel nomi"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Narxi"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Rasm URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          required
        />
        <button type="submit">Qo‘shish</button>
      </form>

      <div className="product-list">
        <h3>Yangi Mebellar</h3>
        {products.map((p) => (
          <div key={p.id} className="product-item">
            <img src={p.image} alt={p.name} />
            <div>
              <p><strong>{p.name}</strong></p>
              <p>£{p.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Admin;
