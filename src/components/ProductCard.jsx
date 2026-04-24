import { useState } from 'react'

export default function ProductCard({ product, addToCart }) {
  const [selectedColor, setSelectedColor] = useState(product.colors[0])

  const handleAdd = () => {
    addToCart({
      ...product,
      selectedColor: selectedColor.name,
      selectedImage: selectedColor.image,
      cartKey: `${product.id}-${selectedColor.name}`,
    })
  }

  return (
    <article className="product-card">
      <div className="stock-badge">Stock: {product.stock}</div>
      <div className="tag-badge">{product.tag}</div>

      <div className="product-image-box">
        <img src={selectedColor.image} alt={product.name} className="product-image" />
      </div>

      <div className="product-body">
        <p className="product-category">{product.category}</p>
        <h3>{product.name}</h3>
        <p className="product-description">{product.description}</p>

        <div className="price-row">
          <span>$ {product.price.toLocaleString('es-CO')}</span>
          <small>COP</small>
        </div>

        <div className="color-area">
          <p>Color: <strong>{selectedColor.name}</strong></p>

          <div className="color-options">
            {product.colors.map((color) => (
              <button
                key={color.name}
                className={`color-circle ${selectedColor.name === color.name ? 'active' : ''}`}
                style={{ backgroundColor: color.hex }}
                onClick={() => setSelectedColor(color)}
                title={color.name}
              />
            ))}
          </div>
        </div>

        <button className="add-btn" onClick={handleAdd}>
          Agregar al carrito
        </button>
      </div>
    </article>
  )
}