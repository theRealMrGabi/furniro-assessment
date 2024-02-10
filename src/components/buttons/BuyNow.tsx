'use client'

import { useRouter } from 'next/navigation'
import { Button } from '.'

export const BuyNowButton = () => {
	const router = useRouter()

	return (
		<Button
			variant='secondary'
			className='w-full lg:w-[42%] mt-4'
			onClick={(e) => {
				e.preventDefault()
				e.stopPropagation()
				router.push('/cart')
			}}
		>
			Buy Now
		</Button>
	)
}
