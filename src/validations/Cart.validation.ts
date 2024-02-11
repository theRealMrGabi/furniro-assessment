import * as Yup from 'yup'
import { ProductStatus } from '@/interface'

export const AddProductSchema = Yup.object({
	name: Yup.string().required('Product name is required'),
	description: Yup.string().required('Product description is required'),
	price: Yup.number()
		.positive('Price must be a positive number')
		.min(1)
		.integer('Price must be an integer')
		.required('Product price is required'),
	currencyCode: Yup.string().required('Currency code is required'),
	currencySymbol: Yup.string().required('Currency symbol is required'),
	quantity: Yup.number()
		.positive('Product quantity must be a positive number')
		.min(1)
		.integer('Product quantity must be an integer')
		.required('Product quantity is required'),
	imageLocation: Yup.string()
		.url('Invalid image URL')
		.required('Image URL is required'),
	status: Yup.mixed<ProductStatus>()
		.oneOf(['ACTIVE', 'INACTIVE'], 'invalid status type')
		.required('Product status is required') as Yup.Schema<ProductStatus>
})
