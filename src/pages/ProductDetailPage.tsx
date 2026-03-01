import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { getProductBySlug, getProductsByCategory } from '../data'
import type { Product } from '../data'

const categoryLabels: Record<Product["category"], string> = {
  "fresh-produce": "Fresh Produce",
  "meat-seafood": "Fresh Meat & Seafood",
  "oils-cooking": "Oils & Cooking",
  "rice-grains": "Rice & Grains",
  "pantry-packaged": "Pantry",
  "spices-seasoning": "Spices & Seasoning",
}

function ProductDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const product = slug ? getProductBySlug(slug) : undefined

  useEffect(() => {
    if (product) {
      document.title = product.metaTitle
      const metaDesc = document.querySelector('meta[name="description"]')
      if (metaDesc) {
        metaDesc.setAttribute('content', product.metaDescription)
      } else {
        const meta = document.createElement('meta')
        meta.name = 'description'
        meta.content = product.metaDescription
        document.head.appendChild(meta)
      }

      const existingLd = document.querySelector('script[type="application/ld+json"][data-product]')
      if (existingLd) existingLd.remove()
      const ldScript = document.createElement('script')
      ldScript.type = 'application/ld+json'
      ldScript.setAttribute('data-product', 'true')
      ldScript.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Product",
        "name": product.name,
        "description": product.description,
        "image": product.image,
        "offers": {
          "@type": "Offer",
          "price": product.price,
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
          "seller": {
            "@type": "LocalBusiness",
            "name": "Adom African Market",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "1224 E 66th St",
              "addressLocality": "Minneapolis",
              "addressRegion": "MN",
              "postalCode": "55423"
            }
          }
        }
      })
      document.head.appendChild(ldScript)

      return () => {
        document.title = 'Adom African Market'
        const script = document.querySelector('script[type="application/ld+json"][data-product]')
        if (script) script.remove()
      }
    }
  }, [product])

  if (!product) {
    return (
      <div className="pt-24 sm:pt-28 pb-20 min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-light mb-4" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>Product Not Found</h1>
          <p className="text-stone-500 mb-8">The product you're looking for doesn't exist or has been removed.</p>
          <Link to="/products" className="inline-flex items-center gap-2 border border-amber-500 text-amber-600 px-6 py-2.5 text-xs tracking-wider uppercase hover:bg-amber-500 hover:text-white transition-all duration-300">
            <ArrowLeft size={16} /> Back to Products
          </Link>
        </div>
      </div>
    )
  }

  const related = getProductsByCategory(product.category).filter((p) => p.slug !== product.slug).slice(0, 4)
  const categoryLabel = categoryLabels[product.category]

  return (
    <div className="pt-16 sm:pt-20">
      {/* Breadcrumb */}
      <div className="bg-stone-50 border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-2 text-xs sm:text-sm text-stone-500">
            <Link to="/" className="hover:text-amber-600 transition-colors">Home</Link>
            <span>/</span>
            <Link to="/products" className="hover:text-amber-600 transition-colors">Products</Link>
            <span>/</span>
            <Link to={`/products#${product.category}`} className="hover:text-amber-600 transition-colors">{categoryLabel}</Link>
            <span>/</span>
            <span className="text-stone-800">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Product Detail */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
            <div className="relative overflow-hidden bg-stone-100">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-72 sm:h-96 lg:h-[500px] object-cover"
                onError={(e) => { (e.target as HTMLImageElement).src = product.fallback }}
              />
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-amber-600 text-xs sm:text-sm tracking-widest uppercase mb-3">{categoryLabel}</p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-4" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                {product.name}
              </h1>
              <div className="flex items-baseline gap-3 mb-6">
                <span className="text-2xl sm:text-3xl font-semibold text-amber-600">$ {product.price.toFixed(2)}</span>
                <span className="text-stone-500 text-sm uppercase tracking-wider">{product.unit}</span>
              </div>
              <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-8">
                {product.description}
              </p>
              {product.category === 'meat-seafood' && (
                <p className="text-stone-500 text-xs italic mb-6">Prices subject to change. Fresh meat and seafood are sold by weight.</p>
              )}
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="inline-block border border-amber-500 text-amber-600 px-8 py-3 text-xs tracking-wider uppercase hover:bg-amber-500 hover:text-white transition-all duration-300">
                  Visit Store
                </Link>
                <a href="tel:+16128694117" className="inline-block border border-stone-300 text-stone-700 px-8 py-3 text-xs tracking-wider uppercase hover:border-stone-500 transition-all duration-300">
                  Call to Order
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {related.length > 0 && (
        <section className="py-12 sm:py-16 bg-amber-50/50 border-t border-stone-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-light text-center mb-10" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              More in {categoryLabel}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {related.map((item) => (
                <Link key={item.slug} to={`/product/${item.slug}`} className="bg-white border border-stone-200 group hover:border-amber-500 transition-all duration-300 text-center block">
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
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}

export default ProductDetailPage
