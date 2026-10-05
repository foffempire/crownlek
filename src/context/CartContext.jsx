/* eslint-disable react-refresh/only-export-components --
   The cart provider and its consumer hook intentionally live together so the
   context stays private to this module. */
import { createContext, useCallback, useContext, useEffect, useMemo, useReducer, useState } from 'react'
import { estimatedDelivery } from '../lib/format'
import { site } from '../data/site'

const CART_KEY = 'crownlek:cart:v1'
const WISHLIST_KEY = 'crownlek:wishlist:v1'

export const CartContext = createContext(null)

/** Stable identity for a cart line: same product, size and colour merge. */
const lineKey = (productId, size, color) => `${productId}::${size}::${color}`

/** Only keep the fields the UI needs, so stored payloads stay small. */
const toLine = (product, quantity, selectedSize, selectedColor) => ({
  key: lineKey(product.id, selectedSize, selectedColor),
  productId: product.id,
  slug: product.slug,
  name: product.name,
  price: product.price,
  image: product.images?.[0] ?? null,
  category: product.category,
  quantity,
  selectedSize,
  selectedColor,
})

function cartReducer(state, action) {
  switch (action.type) {
    case 'add': {
      const { product, quantity, selectedSize, selectedColor } = action
      const key = lineKey(product.id, selectedSize, selectedColor)
      const existing = state.find((line) => line.key === key)

      if (existing) {
        return state.map((line) =>
          line.key === key
            ? { ...line, quantity: Math.min(line.quantity + quantity, 99) }
            : line,
        )
      }

      return [toLine(product, quantity, selectedSize, selectedColor), ...state]
    }

    case 'remove':
      return state.filter((line) => line.key !== action.key)

    case 'setQuantity':
      return state.map((line) =>
        line.key === action.key
          ? { ...line, quantity: Math.min(Math.max(action.quantity, 1), 99) }
          : line,
      )

    case 'clear':
      return []

    default:
      return state
  }
}

function readStorage(key, fallback) {
  try {
    const raw = window.localStorage.getItem(key)
    return raw ? JSON.parse(raw) : fallback
  } catch {
    return fallback
  }
}

export function CartProvider({ children }) {
  // Read persisted state lazily so nothing has to be copied into state from an
  // effect after the first render.
  const [items, dispatch] = useReducer(cartReducer, [], () => {
    const stored = readStorage(CART_KEY, [])
    return Array.isArray(stored) ? stored : []
  })
  const [wishlist, setWishlist] = useState(() => {
    const stored = readStorage(WISHLIST_KEY, [])
    return Array.isArray(stored) ? stored : []
  })
  const [isDrawerOpen, setDrawerOpen] = useState(false)

  /* ----------------------------- persistence ---------------------------- */
  useEffect(() => {
    window.localStorage.setItem(CART_KEY, JSON.stringify(items))
  }, [items])

  useEffect(() => {
    window.localStorage.setItem(WISHLIST_KEY, JSON.stringify(wishlist))
  }, [wishlist])

  /* -------------------------------- actions ------------------------------ */
  const addItem = useCallback(
    (product, { quantity = 1, size, color } = {}) => {
      const selectedSize = size ?? product.sizes?.[0] ?? 'One Size'
      const selectedColor = color ?? product.colors?.[0] ?? 'Default'
      dispatch({ type: 'add', product, quantity, selectedSize, selectedColor })
      setDrawerOpen(true)
    },
    [],
  )

  const removeItem = useCallback((key) => dispatch({ type: 'remove', key }), [])

  const updateQuantity = useCallback(
    (key, quantity) => dispatch({ type: 'setQuantity', key, quantity }),
    [],
  )

  const incrementItem = useCallback(
    (key) =>
      dispatch({
        type: 'setQuantity',
        key,
        quantity: (items.find((line) => line.key === key)?.quantity ?? 0) + 1,
      }),
    [items],
  )

  const decrementItem = useCallback(
    (key) =>
      dispatch({
        type: 'setQuantity',
        key,
        quantity: (items.find((line) => line.key === key)?.quantity ?? 1) - 1,
      }),
    [items],
  )

  const clearCart = useCallback(() => dispatch({ type: 'clear' }), [])

  const openDrawer = useCallback(() => setDrawerOpen(true), [])
  const closeDrawer = useCallback(() => setDrawerOpen(false), [])

  const toggleWishlist = useCallback((productId) => {
    setWishlist((prev) =>
      prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId],
    )
  }, [])

  const isWishlisted = useCallback((productId) => wishlist.includes(productId), [wishlist])

  /* -------------------------------- totals ------------------------------- */
  const totals = useMemo(() => {
    const subtotal = items.reduce((sum, line) => sum + line.price * line.quantity, 0)
    const delivery = estimatedDelivery(subtotal)
    const itemCount = items.reduce((sum, line) => sum + line.quantity, 0)
    return {
      subtotal,
      delivery,
      total: subtotal + delivery,
      itemCount,
      freeDeliveryThreshold: site.freeDeliveryThreshold,
      remainingForFreeDelivery: Math.max(site.freeDeliveryThreshold - subtotal, 0),
    }
  }, [items])

  const value = useMemo(
    () => ({
      items,
      ...totals,
      isDrawerOpen,
      openDrawer,
      closeDrawer,
      addItem,
      removeItem,
      updateQuantity,
      incrementItem,
      decrementItem,
      clearCart,
      wishlist,
      toggleWishlist,
      isWishlisted,
    }),
    [
      items,
      totals,
      isDrawerOpen,
      openDrawer,
      closeDrawer,
      addItem,
      removeItem,
      updateQuantity,
      incrementItem,
      decrementItem,
      clearCart,
      wishlist,
      toggleWishlist,
      isWishlisted,
    ],
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

/** Access the cart. Must be used inside `<CartProvider>`. */
export function useCart() {
  const context = useContext(CartContext)
  if (!context) throw new Error('useCart must be used within a CartProvider')
  return context
}
