import { Product } from '@/interface'

export const _formatNumber = (value: number) => {
	return new Intl.NumberFormat().format(value)
}

export const _localStorageKeys = Object.freeze({
	cart: 'cart'
})

export const _getCartItems = () => {
	const localCart = globalThis?.localStorage.getItem(_localStorageKeys.cart)
	const parseCartItem = !localCart ? null : (JSON.parse(localCart) as Product[])
	return parseCartItem
}

export * from './Cart.actions'
