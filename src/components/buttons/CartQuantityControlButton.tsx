'use client'

import { PlusIcon, MinusIcon } from '@heroicons/react/16/solid'
import toast from 'react-hot-toast'

import { useCartStore } from '@/store'
import { Product } from '@/interface'

export const CartQuantityControlButton = ({
	product
}: {
	product: Product
}) => {
	const cart = useCartStore((store) => store.cart)
	const addItemToCart = useCartStore((store) => store.addItemToCart)
	const reduceItemCount = useCartStore((store) => store.reduceItemCount)

	const currentItem = cart.find((item) => item.id === product.id)

	return (
		<div className='flex justify-between items-center gap-x-4 border border-fur-gold-100 rounded-lg w-full lg:w-fit px-4 py-2'>
			<button
				onClick={(e) => {
					e.preventDefault()
					reduceItemCount(product.id)
				}}
			>
				<MinusIcon className='w-5 h-5 cursor-pointer' />
			</button>

			<p>{currentItem?.quantityInCart || 0}</p>

			<button
				onClick={(e) => {
					e.preventDefault()
					if (
						currentItem &&
						currentItem.quantityInCart + 1 > currentItem.quantity
					) {
						return toast.error(
							'You can not add more than total items we have in store'
						)
					}

					addItemToCart(product)
				}}
			>
				<PlusIcon className='w-5 h-5 cursor-pointer' />
			</button>
		</div>
	)
}
