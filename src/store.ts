/* eslint-disable no-unused-vars */

import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { Product, Cart } from '@/interface'
import { _localStorageKeys } from './utils'

interface CartState {
	cart: Cart[]
	addItemToCart: (product: Product) => void
	removeItemFromCart: (productId: number) => void
	reduceItemCount: (productId: number) => void
}

export const useCartStore = create<CartState>()(
	persist(
		(set) => ({
			cart: [],
			addItemToCart: (product) => {
				set((state) => {
					const updatedCart = [...state.cart]

					const existingItemIndex = updatedCart.findIndex(
						(item) => item.id === product.id
					)

					if (existingItemIndex !== -1) {
						// If item already exists in cart, increase only its quantity
						updatedCart[existingItemIndex].quantityInCart += 1
					} else {
						// If item doesn't exist in cart, add it to the cart and set its quantity to 1
						updatedCart.push({ ...product, quantityInCart: 1 })
					}

					return { cart: updatedCart }
				})
			},
			removeItemFromCart: (productId) => {
				set((state) => ({
					cart: state.cart.filter((item) => item.id !== productId)
				}))
			},
			reduceItemCount: (productId) => {
				set((state) => {
					const updatedCart = [...state.cart]
					const existingItemIndex = updatedCart.findIndex(
						(item) => item.id === productId
					)

					if (
						existingItemIndex !== -1 &&
						updatedCart[existingItemIndex].quantityInCart > 1
					) {
						updatedCart[existingItemIndex].quantityInCart -= 1
					}

					return { cart: updatedCart }
				})
			}
		}),
		{
			name: _localStorageKeys.cart
		}
	)
)
