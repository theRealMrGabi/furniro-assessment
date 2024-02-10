import { _localStorageKeys, _getCartItems } from '@/utils'
import { Product } from '@/interface'

export const AddItemTocart = (product: Product) => {
	const cart = _getCartItems()
	let updatedCart: Product[] = []

	if (cart !== null) {
		const existingItemIndex =
			cart && cart.findIndex((item) => item.id === product.id)

		if (existingItemIndex !== -1) {
			// If item already exists in cart, increase only its quantity
			updatedCart = [...cart]
			updatedCart[existingItemIndex].quantity += 1
		} else {
			// If item doesn't exist in cart, add it to the cart and set its quantity to 1
			updatedCart = [...cart, { ...product, quantity: 1 }]
		}
	} else {
		updatedCart = [{ ...product, quantity: 1 }]
	}

	return globalThis?.localStorage.setItem(
		_localStorageKeys.cart,
		JSON.stringify(updatedCart)
	)
}
