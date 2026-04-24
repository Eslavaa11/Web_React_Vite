export default function Navbar({
  dark,
  toggleTheme,
  cartCount,
  search,
  setSearch,
  sort,
  setSort,
  categoryFilter,
  setCategoryFilter,
}) {
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

      <div className="filter-group">
        <input
          className="nav-search"
          type="text"
          placeholder="Buscar productos..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="nav-filter"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="default">Ordenar</option>
          <option value="price-asc">Menor precio</option>
          <option value="price-desc">Mayor precio</option>
          <option value="name-asc">A → Z</option>
          <option value="name-desc">Z → A</option>
        </select>

        <select
          className="nav-filter"
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
        >
          <option value="all">Todas</option>
          <option value="moda">Moda</option>
          <option value="tecnologia">Tecnología</option>
        </select>
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