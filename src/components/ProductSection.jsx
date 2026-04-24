import ProductCard from './ProductCard'

export default function ProductSection({ title, products, addToCart }) {
  return (
    <section className="product-section">
      <div className="section-heading">
        <p>Catálogo</p>
        <h2>{title}</h2>
      </div>

      <div className="products-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>
    </section>
  )
}