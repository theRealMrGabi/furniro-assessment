'use client'

import { Product } from '@/interface'
import { useCartStore } from '@/store'

import { Button } from '.'

export const AddToCartButton = ({ product }: { product: Product }) => {
	const cart = useCartStore((state) => state.cart)
	const addItemTocart = useCartStore((state) => state.addItemToCart)

	const itemExistInCart = cart.find((item) => item.id === product.id)

	return (
		<Button
			className='capitalize font-semibold w-fit px-4 xs:px-10 py-2 whitespace-nowrap'
			onClick={() => addItemTocart(product)}
			disabled={!!itemExistInCart}
		>
			{!!itemExistInCart ? 'Added to Cart' : 'Add to Cart'}
		</Button>
	)
}
