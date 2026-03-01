import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Trash2, Plus, Minus } from 'lucide-react'
import { useCart } from '../CartContext'

function CartPage() {
  const { items, removeFromCart, updateQuantity, clearCart, totalPrice } = useCart()
  const [showPhone, setShowPhone] = useState(false)

  return (
    <div className="pt-16 sm:pt-20">
      <div className="bg-stone-50 border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-2 text-xs sm:text-sm text-stone-500">
            <Link to="/" className="hover:text-amber-600 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-stone-800">Cart</span>
          </nav>
        </div>
      </div>

      <section className="py-16 sm:py-20 lg:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <p className="text-amber-600 text-xs sm:text-sm tracking-widest uppercase mb-3">Your Cart</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              Shopping Cart
            </h1>
          </div>

          {items.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-stone-500 text-lg mb-8">Your cart is empty.</p>
              <Link to="/products" className="inline-flex items-center gap-2 border border-amber-500 text-amber-600 px-6 py-2.5 text-xs tracking-wider uppercase hover:bg-amber-500 hover:text-white transition-all duration-300">
                <ArrowLeft size={16} /> Browse Products
              </Link>
            </div>
          ) : (
            <>
              <div className="space-y-6">
                {items.map((item) => (
                  <div key={item.product.slug} className="flex items-center gap-4 sm:gap-6 py-5 sm:py-6 border-b border-stone-200">
                    <Link to={`/product/${item.product.slug}`} className="flex-shrink-0">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-20 h-20 sm:w-24 sm:h-24 object-cover"
                        onError={(e) => { (e.target as HTMLImageElement).src = item.product.fallback }}
                      />
                    </Link>
                    <div className="flex-1 min-w-0">
                      <Link to={`/product/${item.product.slug}`} className="text-sm sm:text-base font-semibold tracking-wider uppercase hover:text-amber-600 transition-colors">
                        {item.product.name}
                      </Link>
                      <p className="text-stone-500 text-xs mt-1">{item.product.unit}</p>
                      <p className="text-amber-600 text-sm font-medium mt-1">
                        {item.product.price > 0 ? `$ ${item.product.price.toFixed(2)} USD` : 'Price TBD'}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateQuantity(item.product.slug, item.quantity - 1)}
                        className="w-8 h-8 border border-stone-300 flex items-center justify-center hover:border-amber-500 hover:text-amber-500 transition-colors"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.product.slug, item.quantity + 1)}
                        className="w-8 h-8 border border-stone-300 flex items-center justify-center hover:border-amber-500 hover:text-amber-500 transition-colors"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <p className="text-stone-800 text-sm sm:text-base font-medium">
                        {item.product.price > 0 ? `$ ${(item.product.price * item.quantity).toFixed(2)}` : 'TBD'}
                      </p>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.product.slug)}
                      className="text-stone-400 hover:text-red-500 transition-colors flex-shrink-0"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                ))}
              </div>

              <div className="mt-10 border-t border-stone-200 pt-8">
                <div className="flex items-center justify-between mb-8">
                  <span className="text-lg font-semibold tracking-wider uppercase">Total</span>
                  <span className="text-2xl font-semibold text-amber-600">$ {totalPrice.toFixed(2)} USD</span>
                </div>
                <div className="flex flex-wrap gap-4 justify-between">
                  <button
                    onClick={clearCart}
                    className="border border-stone-300 text-stone-600 px-6 py-2.5 text-xs tracking-wider uppercase hover:border-red-500 hover:text-red-500 transition-all duration-300"
                  >
                    Clear Cart
                  </button>
                  <div className="flex gap-4">
                    <Link to="/products" className="inline-flex items-center gap-2 border border-amber-500 text-amber-600 px-6 py-2.5 text-xs tracking-wider uppercase hover:bg-amber-500 hover:text-white transition-all duration-300">
                      <ArrowLeft size={16} /> Continue Shopping
                    </Link>
                    <button onClick={() => setShowPhone(true)} className="inline-block bg-amber-600 text-white px-8 py-2.5 text-xs tracking-wider uppercase hover:bg-amber-700 transition-all duration-300">
                      Call to Order
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </section>
      {showPhone && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50" onClick={() => setShowPhone(false)}>
          <div className="bg-white rounded-lg shadow-xl p-8 mx-4 max-w-sm w-full text-center" onClick={(e) => e.stopPropagation()}>
            <p className="text-stone-800 text-lg font-semibold mb-2">Store Number</p>
            <a href="tel:+16128694117" className="text-amber-600 text-2xl font-bold hover:underline">(612) 869-4117</a>
            <button onClick={() => setShowPhone(false)} className="mt-6 block mx-auto border border-stone-300 text-stone-600 px-6 py-2 text-xs tracking-wider uppercase hover:border-stone-500 transition-all duration-300">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default CartPage
