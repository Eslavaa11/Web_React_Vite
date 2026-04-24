import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductSection from './components/ProductSection'
import Cart from './components/Cart'
import Footer from './components/Footer'
import products from './data/products'

export default function App() {
  const [cart, setCart] = useState([])
  const [dark, setDark] = useState(false)

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
  }

  const removeFromCart = (cartKey) => {
    setCart(cart.filter((item) => item.cartKey !== cartKey))
  }

  const updateQty = (cartKey, type) => {
    setCart(
      cart.map((item) => {
        if (item.cartKey !== cartKey) return item

        const newQty = type === 'inc'
          ? Math.min(item.qty + 1, item.stock)
          : Math.max(item.qty - 1, 1)

        return { ...item, qty: newQty }
      })
    )
  }

  const fashionProducts = products.filter((product) => product.category === 'moda')
  const techProducts = products.filter((product) => product.category === 'tecnologia')

  return (
    <div className={dark ? 'app dark' : 'app'}>
      <Navbar
        dark={dark}
        toggleTheme={() => setDark(!dark)}
        cartCount={cart.reduce((acc, item) => acc + item.qty, 0)}
      />

      <Hero />

      <main className="main-layout" id="productos">
        <div className="products-content">
          <ProductSection title="Moda urbana" products={fashionProducts} addToCart={addToCart} />
          <ProductSection title="Tecnología y setup" products={techProducts} addToCart={addToCart} />
        </div>

        <Cart cart={cart} remove={removeFromCart} updateQty={updateQty} />
      </main>

      <Footer />
    </div>
  )
}