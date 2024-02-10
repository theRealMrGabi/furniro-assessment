'use client'

import { PlusIcon, MinusIcon } from '@heroicons/react/16/solid'

interface Props {
	handleDecrease: () => void
	handleIncrease: () => void
	value: number
}

export const CartQuantityControlButton = ({
	value,
	handleDecrease,
	handleIncrease
}: Props) => {
	return (
		<div className='flex justify-between items-center gap-x-4 border border-fur-gold-100 rounded-lg w-full lg:w-fit px-4 py-2'>
			<button
				onClick={(e) => {
					e.preventDefault()
					handleDecrease()
				}}
			>
				<MinusIcon className='w-5 h-5 cursor-pointer' />
			</button>
			<p>{value}</p>
			<button
				onClick={(e) => {
					e.preventDefault()
					handleIncrease()
				}}
			>
				<PlusIcon className='w-5 h-5 cursor-pointer' />
			</button>
		</div>
	)
}
