export const _formatNumber = (value: number) => {
	return new Intl.NumberFormat().format(value)
}

export const _localStorageKeys = Object.freeze({
	cart: 'cart'
})
