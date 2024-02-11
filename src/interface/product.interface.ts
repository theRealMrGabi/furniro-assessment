import { InferType } from 'yup'
import { AddProductSchema } from '@/validations'

export type AddProductPayload = InferType<typeof AddProductSchema>

export interface Product {
	id: number
	name: string
	description: string
	price: number
	currencyCode: string
	currencySymbol: string
	quantity: number
	imageLocation: string
	status: ProductStatus
}

export interface Cart extends Product {
	quantityInCart: number
}

export type ProductStatus = 'ACTIVE' | 'INACTIVE'
