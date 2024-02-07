'use client'
import Link from 'next/link'
import Image from 'next/image'

export const ProductCard = () => {
	return (
		<Link
			href='#'
			className='hover:border p-3 rounded-lg hover:shadow-lg group'
		>
			<div className='relative aspect-video w-full'>
				<Image
					src='/images/chair.png'
					alt='Product'
					fill
					className='object-cover transition-transform duration-300 transform ease-in-out group-hover:scale-110'
				/>
			</div>

			<div className='mt-4'>
				<h6 className='text-sm'>Product title</h6>
				<p className='font-semibold text-lg pt-1'>$50,000</p>
			</div>

			<button
				className='w-full border border-fur-gold-100 mt-2 uppercase text-base font-semibold py-2 rounded-md text-black hover:text-white group-hover:bg-fur-gold-100 hover-animate lg:invisible group-hover:visible'
				onClick={(e) => {
					e.preventDefault()
					e.stopPropagation()
				}}
			>
				Add to cart
			</button>
		</Link>
	)
}
