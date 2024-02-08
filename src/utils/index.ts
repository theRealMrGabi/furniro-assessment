export const _formatNumber = (value: number) => {
	return new Intl.NumberFormat().format(value)
}
