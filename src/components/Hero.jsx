export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-blur one"></div>
      <div className="hero-blur two"></div>

      <div className="hero-content">
        <p className="hero-label">MODA · TECNOLOGÍA · SETUP</p>

        <h1>
          Compra de todo en un solo lugar con estilo premium.
        </h1>

        <p className="hero-text">
          Mercado Negro D.C combina productos de moda, accesorios y tecnología con una experiencia visual moderna, rápida y responsive.
        </p>

        <div className="hero-actions">
          <a href="#productos" className="primary-btn">Ver productos</a>
          <a href="#contacto" className="secondary-btn">Conocer más</a>
        </div>
      </div>

      <div className="hero-visual">
        <div className="circle-bg"></div>

        <img
          src="/Imagenes/ChaquetaNegra.png"
          alt="Producto destacado"
          className="hero-product main"
        />

        <img
          src="/Imagenes/audifonos.png"
          alt="Audífonos"
          className="hero-product floating one"
        />

        <img
          src="/Imagenes/GorraNegra.png"
          alt="Gorra"
          className="hero-product floating two"
        />
      </div>
    </section>
  )
}