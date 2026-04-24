const products = [
  {
    id: 1,
    name: 'Camiseta Oversize',
    description: 'Camiseta urbana premium, cómoda y minimalista.',
    price: 45000,
    category: 'moda',
    stock: 8,
    tag: 'Nuevo',
    colors: [
      { name: 'Negro', hex: '#080808', image: '/Imagenes/OversideNegra.png' },
      { name: 'Blanco', hex: '#f5f5f5', image: '/Imagenes/OversideBlanca.png' },
      { name: 'Azul', hex: '#4da3ff', image: '/Imagenes/OversideAzul.png' },
    ],
  },
  {
    id: 2,
    name: 'Gorra Adidas',
    description: 'Gorra deportiva con diseño urbano y liviano.',
    price: 30000,
    category: 'moda',
    stock: 4,
    tag: 'Top',
    colors: [
      { name: 'Negro', hex: '#080808', image: '/Imagenes/GorraNegra.png' },
      { name: 'Rojo', hex: '#ef4444', image: '/Imagenes/GorraRoja.png' },
    ],
  },
  {
    id: 3,
    name: 'Chaqueta Adidas',
    description: 'Chaqueta casual para outfits modernos.',
    price: 135000,
    category: 'moda',
    stock: 3,
    tag: 'Oferta',
    colors: [
      { name: 'Negro', hex: '#080808', image: '/Imagenes/ChaquetaNegra.png' },
      { name: 'Gris', hex: '#8b8b8b', image: '/Imagenes/ChaquetaGris.png' },
      { name: 'Verde', hex: '#16a34a', image: '/Imagenes/ChaquetaVerde.png' },
    ],
  },
  {
    id: 4,
    name: 'Audífonos Bluetooth',
    description: 'Sonido envolvente, batería duradera y diseño compacto.',
    price: 120000,
    category: 'tecnologia',
    stock: 5,
    tag: 'Tech',
    colors: [
      { name: 'Negro', hex: '#080808', image: '/Imagenes/audifonos.png' },
    ],
  },
  {
    id: 5,
    name: 'Mouse Gamer',
    description: 'Precisión, velocidad y diseño gamer para setup competitivo.',
    price: 90000,
    category: 'tecnologia',
    stock: 3,
    tag: 'Gamer',
    colors: [
      { name: 'Negro', hex: '#080808', image: '/Imagenes/MouseGamer.png' },
    ],
  },
  {
    id: 6,
    name: 'Teclado Mecánico',
    description: 'Switches rápidos, estética RGB y alto rendimiento.',
    price: 180000,
    category: 'tecnologia',
    stock: 6,
    tag: 'Setup',
    colors: [
      {
        name: 'Negro',
        hex: '#111111',
        image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?q=80&w=1200&auto=format&fit=crop',
      },
    ],
  },
]

export default products