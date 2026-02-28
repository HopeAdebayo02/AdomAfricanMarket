import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Search, ChevronDown, ChevronUp } from 'lucide-react'
import { categories, products, searchProducts, getFeaturedByCategory, getProductsByCategory } from '../data'
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

function CategorySection({ categorySlug, title, subtitle, bgClass, gridCols, disclaimer, seeAllLink }: { categorySlug: Product["category"]; title: string; subtitle: string; bgClass: string; gridCols: string; disclaimer?: string; seeAllLink?: string }) {
  const [showAll, setShowAll] = useState(false)
  const featured = getFeaturedByCategory(categorySlug)
  const all = getProductsByCategory(categorySlug)
  const hasMore = all.length > featured.length
  const items = seeAllLink ? featured : (showAll ? all : featured)

  return (
    <section id={categorySlug} className={`py-16 sm:py-20 lg:py-28 scroll-mt-24 ${bgClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-amber-600 text-xs sm:text-sm tracking-widest uppercase mb-3">{subtitle}</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            {title}
          </h2>
        </div>
        <div className={`grid ${gridCols} gap-6 sm:gap-8`}>
          {items.map((item) => (
            <ProductCard key={item.slug} item={item} />
          ))}
        </div>
        {disclaimer && (
          <p className="text-stone-500 text-xs sm:text-sm text-center mt-6 italic">{disclaimer}</p>
        )}
        {seeAllLink && hasMore && (
          <div className="text-center mt-8">
            <Link
              to={seeAllLink}
              className="inline-flex items-center gap-2 border border-amber-500 text-amber-600 px-6 py-2.5 text-xs tracking-wider uppercase hover:bg-amber-500 hover:text-white transition-all duration-300"
            >
              See All {subtitle} ({all.length})
            </Link>
          </div>
        )}
        {!seeAllLink && hasMore && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 border border-amber-500 text-amber-600 px-6 py-2.5 text-xs tracking-wider uppercase hover:bg-amber-500 hover:text-white transition-all duration-300"
            >
              {showAll ? (
                <><ChevronUp size={16} /> Show Featured</>
              ) : (
                <><ChevronDown size={16} /> Show All ({all.length})</>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const searchResults = searchProducts(searchQuery)
  const isSearching = searchQuery.trim().length > 0

  const scrollToSection = (slug: string) => {
    const el = document.getElementById(slug)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="pt-16 sm:pt-20">
      {/* Search Bar */}
      <section className="py-8 sm:py-12 bg-stone-950 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-light tracking-wider mb-2" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              Our Products
            </h1>
            <p className="text-stone-400 text-sm">Search our full inventory of authentic African groceries</p>
          </div>
          <div className="relative">
            <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400" />
            <input
              type="text"
              placeholder="Search products... (e.g. plantain, rice, shrimp)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-stone-900 border border-stone-700 rounded-none pl-12 pr-4 py-3.5 text-sm text-white placeholder-stone-500 focus:border-amber-500 focus:outline-none transition-colors"
            />
            {isSearching && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-400 hover:text-white text-sm"
              >
                Clear
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Search Results */}
      {isSearching && (
        <section className="py-12 sm:py-16 bg-amber-50/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-stone-600 text-sm mb-6">
              {searchResults.length} result{searchResults.length !== 1 ? 's' : ''} for "{searchQuery}"
            </p>
            {searchResults.length > 0 ? (
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                {searchResults.map((item) => (
                  <ProductCard key={item.slug} item={item} />
                ))}
              </div>
            ) : (
              <p className="text-stone-500 text-center py-12">No products found. Try a different search term.</p>
            )}
          </div>
        </section>
      )}

      {/* Categories Bar (hidden during search) */}
      {!isSearching && (
        <>
          <section className="py-10 sm:py-16 bg-white border-b border-stone-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 lg:gap-12">
                {categories.map((cat) => (
                  <div key={cat.name} className="flex items-center gap-3 sm:gap-4 group cursor-pointer" onClick={() => scrollToSection(cat.slug)}>
                    <span className="text-xl sm:text-2xl lg:text-4xl font-light tracking-wider uppercase text-stone-800 group-hover:text-amber-600 transition-colors" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                      {cat.name}
                    </span>
                    <img
                      src={cat.image}
                      alt={cat.name}
                      className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover border-2 border-transparent group-hover:border-amber-500 transition-all"
                      onError={(e) => { (e.target as HTMLImageElement).src = "https://placehold.co/100x100/png" }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Popular Products Grid */}
          <section id="products" className="py-16 sm:py-20 lg:py-28 bg-amber-50/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-10 sm:mb-14">
                <p className="text-amber-600 text-xs sm:text-sm tracking-widest uppercase mb-3">Our Products</p>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                  Popular African Staples
                </h2>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {products.map((product) => (
                  <div key={product.name} className="bg-white border border-stone-200 group hover:border-amber-500 transition-all duration-300">
                    <div className="p-4 sm:p-6 flex items-center justify-between">
                      <h3 className="text-sm sm:text-base font-semibold tracking-wider uppercase">{product.name}</h3>
                      <span className="text-stone-600 text-sm sm:text-base">$ {product.price.toFixed(2)} USD</span>
                    </div>
                    <div className="relative overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-48 sm:h-56 lg:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => { (e.target as HTMLImageElement).src = product.fallback }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <CategorySection categorySlug="fresh-produce" title="Farm Fresh, Straight to You" subtitle="Fresh Produce" bgClass="bg-white" gridCols="sm:grid-cols-2 lg:grid-cols-4" seeAllLink="/fresh-produce" />
          <CategorySection categorySlug="meat-seafood" title="Fresh Meat & Seafood" subtitle="Fresh Meat & Seafood" bgClass="bg-amber-50/50" gridCols="sm:grid-cols-2 lg:grid-cols-4" disclaimer="Prices subject to change. Fresh meat and seafood are sold by weight." seeAllLink="/meat-seafood" />
          <CategorySection categorySlug="oils-cooking" title="Oils & Cooking" subtitle="Oils & Cooking" bgClass="bg-white" gridCols="sm:grid-cols-2 lg:grid-cols-3" seeAllLink="/oils-cooking" />
          <CategorySection categorySlug="rice-grains" title="Rice & Grains" subtitle="Rice & Grains" bgClass="bg-amber-50/50" gridCols="sm:grid-cols-2 lg:grid-cols-4" seeAllLink="/rice-grains" />
        </>
      )}
    </div>
  )
}

export default ProductsPage
