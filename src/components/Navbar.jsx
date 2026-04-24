export default function Navbar({ dark, toggleTheme, cartCount }) {
  return (
    <nav className="navbar">
      <a href="#" className="logo">
        Mercado<span>Negro</span>
      </a>

      <div className="nav-links">
        <a href="#">Inicio</a>
        <a href="#productos">Productos</a>
        <a href="#contacto">Contacto</a>
      </div>

      <div className="nav-actions">
        <button onClick={toggleTheme} className="theme-btn">
          {dark ? '☀️ Claro' : '🌙 Oscuro'}
        </button>

        <a href="#productos" className="cart-pill">
          🛒 {cartCount}
        </a>
      </div>
    </nav>
  )
}