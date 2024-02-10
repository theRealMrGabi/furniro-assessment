'use client'

import { XMarkIcon } from '@heroicons/react/16/solid'

interface Props {
	removeCartItem: () => void
}

export const RemoveCartItemButton = ({ removeCartItem }: Props) => {
	return (
		<button
			onClick={(e) => {
				e.preventDefault()
				removeCartItem()
			}}
		>
			<XMarkIcon className='w-6 h-6 text-red-700' />
		</button>
	)
}
