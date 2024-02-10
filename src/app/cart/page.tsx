'use client'

import Image from 'next/image'
import { ExclamationCircleIcon } from '@heroicons/react/24/outline'
import { XMarkIcon, LockClosedIcon } from '@heroicons/react/16/solid'
import Link from 'next/link'

import { Hero, Button, CartQuantityControlButton } from '@/components'
import { _formatNumber } from '@/utils'
import { useCartStore } from '@/store'

export default function Cart() {
	const cart = useCartStore((store) => store.cart)
	const removeItemFromCart = useCartStore((state) => state.removeItemFromCart)

	const totalPrice = cart.reduce(
		(acc, item) => acc + item.price * item.quantityInCart,
		0
	)

	return (
		<div>
			<Hero pageTitle='Shopping cart' />
			<div className='px-4 md:px-8 lg:px-16 py-[5%] flex flex-col md:flex-row gap-5'>
				{!cart.length ? (
					<div className='grid place-items-center w-full h-[20vh]'>
						<h2 className='text-xl font-semibold'>Empty cart</h2>
						<Link href='/' className='text-fur-gold-100 text-lg font-bold'>
							View products
						</Link>
					</div>
				) : (
					<>
						<div className='md:w-3/5 lg:w-3/4 space-y-6 border rounded-lg p-4'>
							{cart?.map((item) => (
								<div
									key={item.id}
									className='flex flex-wrap items-center gap-4 justify-between cursor-pointer border-b last:border-0 pb-4'
								>
									<div className='relative w-1/5 min-h-20 aspect-video bg-fur-gold-200 rounded-lg'>
										<Image
											src={item.imageLocation}
											alt={item.name}
											fill
											className='object-contain p-4'
										/>
									</div>

									<div>
										<h2 className='text-sm'>{item.name}</h2>
										<div className='flex gap-2 items-center text-red-700'>
											<ExclamationCircleIcon className='w-5 h-5' />
											<p className='text-xs'>{item.quantity} unit(s) left</p>
										</div>
									</div>

									<CartQuantityControlButton product={item} />

									<div>
										<h3 className='font-bold capitalize text-lg'>
											{item.currencySymbol}
											{_formatNumber(item.price * item.quantityInCart)}
										</h3>
										<h6 className='text-xs font-semibold text-slate-400'>
											{item.currencySymbol}
											{_formatNumber(item.price)} x {item.quantityInCart}
										</h6>
									</div>

									<button
										type='button'
										onClick={() => removeItemFromCart(item.id)}
									>
										<XMarkIcon className='w-6 h-6 text-red-700' />
									</button>
								</div>
							))}
						</div>

						<div className='md:w-2/5 lg:w-1/4 border rounded-lg h-fit'>
							<div className='flex justify-between items-center border-b p-4'>
								<h4 className='font-bold capitalize text-lg'>Cart summary</h4>
								<h4 className='font-bold capitalize text-lg'>
									{cart.length} items
								</h4>
							</div>

							<div className='flex justify-between items-center border-b p-4 gap-4'>
								<p className='text-sm whitespace-nowrap '>Delivery charges:</p>
								<p className='text-xs text-slate-500 w-3/5'>
									Add your Delivery address at checkout to see delivery charges
								</p>
							</div>

							<div className='flex justify-between items-center border-b p-4'>
								<h3 className='font-bold capitalize text-lg'>Total</h3>
								<h3 className='font-bold capitalize text-lg'>
									{cart[0]?.currencySymbol || '$'}
									{_formatNumber(totalPrice)}
								</h3>
							</div>

							<p className='text-xs text-fur-gold-300 text-right px-4 pt-1'>
								Excluding delivery charges
							</p>

							<div className='px-4 py-5 border-b '>
								<Button variant='secondary' className='w-full'>
									Continue to Checkout
								</Button>
							</div>

							<div className='p-4 flex items-center gap-4'>
								<LockClosedIcon className='w-4 h-4' />{' '}
								<p className='text-xs text-slate-500'>
									Transactions are 100% Safe and Secure
								</p>
							</div>
						</div>
					</>
				)}
			</div>
		</div>
	)
}
