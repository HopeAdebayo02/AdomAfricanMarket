import { createContext, useContext, useState, useEffect } from 'react'
import type { ReactNode } from 'react'
import type { Product } from './data'

interface CartItem {
  product: Product
  quantity: number
}

interface CartContextType {
  items: CartItem[]
  addToCart: (product: Product) => void
  removeFromCart: (slug: string) => void
  updateQuantity: (slug: string, quantity: number) => void
  clearCart: () => void
  totalItems: number
  totalPrice: number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem('adom-cart')
    if (saved) {
      try { return JSON.parse(saved) } catch { return [] }
    }
    return []
  })

  useEffect(() => {
    localStorage.setItem('adom-cart', JSON.stringify(items))
  }, [items])

  const addToCart = (product: Product) => {
    setItems((prev) => {
      const existing = prev.find((item) => item.product.slug === product.slug)
      if (existing) {
        return prev.map((item) =>
          item.product.slug === product.slug
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      return [...prev, { product, quantity: 1 }]
    })
  }

  const removeFromCart = (slug: string) => {
    setItems((prev) => prev.filter((item) => item.product.slug !== slug))
  }

  const updateQuantity = (slug: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(slug)
      return
    }
    setItems((prev) =>
      prev.map((item) =>
        item.product.slug === slug ? { ...item, quantity } : item
      )
    )
  }

  const clearCart = () => setItems([])

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)
  const totalPrice = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0)

  return (
    <CartContext.Provider value={{ items, addToCart, removeFromCart, updateQuantity, clearCart, totalItems, totalPrice }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) throw new Error('useCart must be used within CartProvider')
  return context
}
