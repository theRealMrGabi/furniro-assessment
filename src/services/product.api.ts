import { _axios } from '.'
import { Product } from '@/interface'

export const productQueryKeys = Object.freeze({
	getProducts: 'products',
	getProductById: 'productById'
})

export const GetProductsApi = async () => {
	try {
		const response: Product[] = await _axios.get('productBundles')
		return response
	} catch (error) {
		throw error
	}
}

export const GetProductByIdApi = async (productId: string) => {
	try {
		const response: Product = await _axios.get(`productBundles/${productId}`)
		return response
	} catch (error) {
		throw error
	}
}
