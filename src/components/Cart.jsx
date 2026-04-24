export default function Cart({ cart, remove, updateQty, clearCart }) {
  const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0)

  return (
    <aside className="cart">
      <div className="cart-header">
        <div>
          <p className="eyebrow">Resumen</p>
          <h2>Carrito</h2>
        </div>

        <span className="cart-count">
          {cart.reduce((acc, item) => acc + item.qty, 0)}
        </span>
      </div>

      {cart.length === 0 ? (
        <p className="empty-cart">Tu carrito está vacío.</p>
      ) : (
        <>
          <button className="clear-cart-btn" onClick={clearCart}>
            Vaciar carrito
          </button>

          <div className="cart-list">
            {cart.map((item) => (
              <div className="cart-item" key={item.cartKey}>
                <img src={item.selectedImage} alt={item.name} className="cart-img" />

                <div className="cart-info">
                  <h4>{item.name}</h4>
                  <p>{item.selectedColor}</p>
                  <strong>$ {item.price.toLocaleString('es-CO')}</strong>

                  <div className="qty-controls">
                    <button onClick={() => updateQty(item.cartKey, 'dec')}>−</button>
                    <span>{item.qty}</span>
                    <button onClick={() => updateQty(item.cartKey, 'inc')}>+</button>
                  </div>
                </div>

                <button className="remove-btn" onClick={() => remove(item.cartKey)}>
                  ×
                </button>
              </div>
            ))}
          </div>

          <div className="cart-total">
            <span>Total</span>
            <strong>$ {total.toLocaleString('es-CO')} COP</strong>
          </div>

          <button className="buy-btn">Comprar ahora</button>
        </>
      )}
    </aside>
  )
}