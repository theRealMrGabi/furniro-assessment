import {
	dehydrate,
	HydrationBoundary,
	QueryClient
} from '@tanstack/react-query'
import Image from 'next/image'
import classNames from 'classnames'

import { Button, CartQuantityControlButton, BuyNowButton } from '@/components'
import { productQueryKeys, GetProductByIdApi } from '@/services'
import { _formatNumber, AddItemTocart } from '@/utils'

export default async function SingleProductPage({
	params
}: {
	params: {
		product: string
		id: string
	}
}) {
	const queryClient = new QueryClient()

	const product = await queryClient.fetchQuery({
		queryKey: [productQueryKeys.getProductById, params.id],
		queryFn: () => GetProductByIdApi(params.id)
	})

	return (
		<HydrationBoundary state={dehydrate(queryClient)}>
			<div className='px-4 md:px-8 lg:px-16 py-[5%]'>
				<div className='flex flex-col md:flex-row gap-5 lg:gap-20 w-full'>
					<div className='w-full md:w-1/2 lg:w-2/5 bg-fur-gold-200 relative aspect-video p-4 rounded-lg'>
						<Image
							src={product.imageLocation}
							alt={product.name}
							fill
							className='object-cover p-4'
							sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
						/>
					</div>

					<div className='w-full md:w-1/2 lg:w-3/5 p-4'>
						<h2 className='font-semibold text-3xl'>{product.name}</h2>
						<h4 className='py-3 text-xl font-semibold text-fur-grey-100'>
							{product.currencySymbol}
							{_formatNumber(product.price)}
						</h4>

						<div className='space-y-3'>
							<p className=''>{product.description}</p>

							<p className='text-sm'>
								Product Status:{' '}
								<span
									className={classNames('font-semibold', {
										'text-green-600': product.status.toLowerCase() === 'active',
										'text-red-600': product.status.toLowerCase() !== 'active'
									})}
								>
									{product.status}
								</span>
							</p>

							<p className='text-sm'>
								Total quantity in store:{' '}
								<span className='font-semibold'>{product.quantity}</span>
							</p>
						</div>

						<div className='flex items-center gap-4 mt-3'>
							<CartQuantityControlButton
								handleDecrease={async () => {
									'use server'
								}}
								handleIncrease={async () => {
									'use server'
								}}
								value={5}
							/>

							<Button
								className='capitalize font-semibold w-fit px-4 xs:px-10 py-2 whitespace-nowrap'
								onClick={async (e) => {
									'use server'
									e.preventDefault()
									e.stopPropagation()
									AddItemTocart(product)
								}}
							>
								Add to Cart
							</Button>
						</div>

						<BuyNowButton />
					</div>
				</div>
			</div>
		</HydrationBoundary>
	)
}
