import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductSection from './components/ProductSection'
import Cart from './components/Cart'
import Footer from './components/Footer'
import products from './data/products'

export default function App() {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('mercadoNegroCart')
    return savedCart ? JSON.parse(savedCart) : []
  })

  const [dark, setDark] = useState(() => {
    return localStorage.getItem('mercadoNegroTheme') === 'dark'
  })

  const [search, setSearch] = useState('')
  const [sort, setSort] = useState('default')
  const [categoryFilter, setCategoryFilter] = useState('all')
  const [toast, setToast] = useState('')

  useEffect(() => {
    localStorage.setItem('mercadoNegroCart', JSON.stringify(cart))
  }, [cart])

  useEffect(() => {
    localStorage.setItem('mercadoNegroTheme', dark ? 'dark' : 'light')
  }, [dark])

  const showToast = (message) => {
    setToast(message)
    setTimeout(() => setToast(''), 1800)
  }

  const addToCart = (product) => {
    const existing = cart.find((item) => item.cartKey === product.cartKey)

    if (existing) {
      setCart(
        cart.map((item) =>
          item.cartKey === product.cartKey
            ? { ...item, qty: Math.min(item.qty + 1, item.stock) }
            : item
        )
      )
    } else {
      setCart([...cart, { ...product, qty: 1 }])
    }

    showToast(`${product.name} agregado al carrito`)
  }

  const removeFromCart = (cartKey) => {
    setCart(cart.filter((item) => item.cartKey !== cartKey))
  }

  const clearCart = () => {
    setCart([])
    showToast('Carrito vaciado')
  }

  const updateQty = (cartKey, type) => {
    setCart(
      cart.map((item) => {
        if (item.cartKey !== cartKey) return item

        const newQty =
          type === 'inc'
            ? Math.min(item.qty + 1, item.stock)
            : Math.max(item.qty - 1, 1)

        return { ...item, qty: newQty }
      })
    )
  }

  let filteredProducts = products.filter((product) => {
    const query = search.toLowerCase()

    const matchesSearch =
      product.name.toLowerCase().includes(query) ||
      product.description.toLowerCase().includes(query) ||
      product.category.toLowerCase().includes(query)

    const matchesCategory =
      categoryFilter === 'all' || product.category === categoryFilter

    return matchesSearch && matchesCategory
  })

  if (sort === 'price-asc') {
    filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price)
  }

  if (sort === 'price-desc') {
    filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price)
  }

  if (sort === 'name-asc') {
    filteredProducts = [...filteredProducts].sort((a, b) =>
      a.name.localeCompare(b.name)
    )
  }

  if (sort === 'name-desc') {
    filteredProducts = [...filteredProducts].sort((a, b) =>
      b.name.localeCompare(a.name)
    )
  }

  const fashionProducts = filteredProducts.filter(
    (product) => product.category === 'moda'
  )

  const techProducts = filteredProducts.filter(
    (product) => product.category === 'tecnologia'
  )

  const cartCount = cart.reduce((acc, item) => acc + item.qty, 0)

  return (
    <div className={dark ? 'app dark' : 'app'}>
      <Navbar
        dark={dark}
        toggleTheme={() => setDark(!dark)}
        cartCount={cartCount}
        search={search}
        setSearch={setSearch}
        sort={sort}
        setSort={setSort}
        categoryFilter={categoryFilter}
        setCategoryFilter={setCategoryFilter}
      />

      <Hero />

      <main className="main-layout" id="productos">
        <div className="products-content">
          {fashionProducts.length > 0 && (
            <ProductSection
              title="Moda urbana"
              products={fashionProducts}
              addToCart={addToCart}
            />
          )}

          {techProducts.length > 0 && (
            <ProductSection
              title="Tecnología y setup"
              products={techProducts}
              addToCart={addToCart}
            />
          )}

          {filteredProducts.length === 0 && (
            <div className="empty-results">
              <h2>No encontramos productos</h2>
              <p>Intenta buscar otra categoría, nombre o filtro.</p>
            </div>
          )}
        </div>

        <Cart
          cart={cart}
          remove={removeFromCart}
          updateQty={updateQty}
          clearCart={clearCart}
        />
      </main>

      {toast && <div className="toast">{toast}</div>}

      <Footer />
    </div>
  )
}