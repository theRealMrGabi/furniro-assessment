import Image from 'next/image'
import { LockClosedIcon } from '@heroicons/react/16/solid'
import { ExclamationCircleIcon } from '@heroicons/react/24/outline'

import {
	Hero,
	Button,
	CartQuantityControlButton,
	RemoveCartItemButton
} from '@/components'

const cart = [
	{
		id: 11,
		name: '10 Lives',
		description: '10 Lives product bundle.',
		price: 1,
		currencyCode: 'USD',
		currencySymbol: '$',
		quantity: 10,
		imageLocation:
			'https://dev-images-carry1st-products.s3.eu-west-2.amazonaws.com/74e517a3-0615-4019-bb08-cc697cf4e747.png',
		status: 'ACTIVE'
	},
	{
		id: 19,
		name: '25 Lives',
		description: '25 Lives product bundle.',
		price: 2,
		currencyCode: 'USD',
		currencySymbol: '$',
		quantity: 25,
		imageLocation:
			'https://dev-images-carry1st-products.s3.eu-west-2.amazonaws.com/0a90f406-7340-4957-87ae-a8233d8c9f68.png',
		status: 'ACTIVE'
	},
	{
		id: 20,
		name: '50 Lives',
		description: '50 Lives product bundle.',
		price: 2,
		currencyCode: 'USD',
		currencySymbol: '$',
		quantity: 50,
		imageLocation:
			'https://dev-images-carry1st-products.s3.eu-west-2.amazonaws.com/a3fc8953-ba5b-4fb4-9017-223557716594.png',
		status: 'ACTIVE'
	}
]

export default async function Cart() {
	return (
		<div>
			<Hero pageTitle='Shopping cart' />
			<div className='px-4 md:px-8 lg:px-16 py-[5%] flex flex-col md:flex-row gap-5'>
				<div className='md:w-3/5 lg:w-3/4 space-y-6 border rounded-lg p-4'>
					{cart?.map((item) => (
						<div
							key={item.id}
							className='flex flex-wrap items-center gap-4 justify-between cursor-pointer border-b last:border-0 pb-4'
						>
							<div className='relative w-1/5 aspect-video bg-fur-gold-200 rounded-lg'>
								<Image
									src={item.imageLocation}
									alt={item.name}
									fill
									className='object-cover p-4'
								/>
							</div>

							<div>
								<h2>{item.name}</h2>
								<div className='flex gap-2 items-center text-red-700'>
									<ExclamationCircleIcon className='w-5 h-5' />
									<p className='text-xs'>{item.quantity} unit(s) left</p>
								</div>
							</div>

							<CartQuantityControlButton
								handleDecrease={async () => {
									'use server'
								}}
								handleIncrease={async () => {
									'use server'
								}}
								value={5}
							/>

							<div>
								<h3 className='font-bold capitalize text-lg'>$4,200,000</h3>
								<h6 className='text-xs font-semibold text-slate-400'>
									₦2,108,400 x 2 items
								</h6>
							</div>

							<RemoveCartItemButton
								removeCartItem={async () => {
									'use server'
								}}
							/>
						</div>
					))}
				</div>

				<div className='md:w-2/5 lg:w-1/4 border rounded-lg h-fit'>
					<div className='flex justify-between items-center border-b p-4'>
						<h4 className='font-bold capitalize text-lg'>Cart summary</h4>
						<h4 className='font-bold capitalize text-lg'>6 items</h4>
					</div>

					<div className='flex justify-between items-center border-b p-4 gap-4'>
						<p className='text-sm whitespace-nowrap '>Delivery charges:</p>
						<p className='text-xs text-slate-500 w-3/5'>
							Add your Delivery address at checkout to see delivery charges
						</p>
					</div>

					<div className='flex justify-between items-center border-b p-4'>
						<h3 className='font-bold capitalize text-lg'>Total</h3>
						<h3 className='font-bold capitalize text-lg'>$4,200,000</h3>
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
			</div>
		</div>
	)
}
