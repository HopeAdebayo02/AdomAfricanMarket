import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { getProductsByCategory } from '../data'
import type { Product } from '../data'

function ProductCard({ item }: { item: Product }) {
  return (
    <Link to={`/product/${item.slug}`} className="bg-white border border-stone-200 group hover:border-amber-500 transition-all duration-300 text-center block">
      <div className="relative overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-40 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-500"
          onError={(e) => { (e.target as HTMLImageElement).src = item.fallback }}
        />
      </div>
      <div className="p-4 sm:p-5">
        <h3 className="text-sm sm:text-base font-semibold tracking-wider uppercase mb-2">{item.name}</h3>
        <p className="text-amber-600 text-sm sm:text-base font-medium">$ {item.price.toFixed(2)} USD</p>
        <p className="text-stone-500 text-xs mt-1">{item.unit}</p>
      </div>
    </Link>
  )
}

function MeatSeafoodPage() {
  const allItems = getProductsByCategory('meat-seafood')

  useEffect(() => {
    document.title = 'Fresh Meat & Seafood - Adom African Market Minneapolis'
    const metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Browse all meat and seafood at Adom African Market in Minneapolis. Fresh fish, shrimp, goat, and more.')
    }
    return () => {
      document.title = 'Adom African Market'
    }
  }, [])

  return (
    <div className="pt-16 sm:pt-20">
      <div className="bg-stone-50 border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-2 text-xs sm:text-sm text-stone-500">
            <Link to="/" className="hover:text-amber-600 transition-colors">Home</Link>
            <span>/</span>
            <Link to="/products" className="hover:text-amber-600 transition-colors">Products</Link>
            <span>/</span>
            <span className="text-stone-800">Fresh Meat & Seafood</span>
          </nav>
        </div>
      </div>

      <section className="py-16 sm:py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <p className="text-amber-600 text-xs sm:text-sm tracking-widest uppercase mb-3">Fresh Meat & Seafood</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              All Fresh Meat & Seafood
            </h1>
            <p className="text-stone-500 text-sm mt-4">{allItems.length} items available</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {allItems.map((item) => (
              <ProductCard key={item.slug} item={item} />
            ))}
          </div>
          <p className="text-stone-500 text-xs sm:text-sm text-center mt-6 italic">Prices subject to change. Fresh meat and seafood are sold by weight.</p>
          <div className="text-center mt-12">
            <Link to="/products" className="inline-flex items-center gap-2 border border-amber-500 text-amber-600 px-6 py-2.5 text-xs tracking-wider uppercase hover:bg-amber-500 hover:text-white transition-all duration-300">
              <ArrowLeft size={16} /> Back to Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default MeatSeafoodPage
