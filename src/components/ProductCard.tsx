'use client'
import Link from 'next/link'
import Image from 'next/image'

import { Product } from '@/interface'
import { _formatNumber } from '@/utils'
import { Button } from '.'

export const ProductCard = ({ product }: { product: Product }) => {
	return (
		<Link
			href={`/product/${product.id}`}
			className='hover:border p-3 rounded-lg hover:shadow-lg group'
		>
			<div className='relative aspect-video w-full mt-2'>
				<Image
					src={product.imageLocation}
					alt={product.name}
					fill
					className='object-cover transition-transform duration-300 transform ease-in-out group-hover:scale-110'
					sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
				/>
			</div>

			<div className='mt-4'>
				<h6 className='text-sm'>{product.name}</h6>
				<p className='font-semibold text-lg pt-1'>
					{product.currencySymbol}
					{_formatNumber(product.price)}
				</p>
			</div>

			<Button
				className='w-full uppercase font-semibold group-hover:bg-fur-gold-100 lg:invisible group-hover:visible group-hover:text-white mt-2'
				onClick={(e) => {
					e.preventDefault()
					e.stopPropagation()
				}}
			>
				Add to cart
			</Button>
		</Link>
	)
}
