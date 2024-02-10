'use client'
import Image from 'next/image'
import Link from 'next/link'
import { ShoppingCartIcon, PlusCircleIcon } from '@heroicons/react/24/outline'

import { _getCartItems } from '@/utils'

export const Navbar = () => {
	const cart = _getCartItems()

	return (
		<nav className='flex justify-between items-center px-4 md:px-8 lg:px-16 py-2 w-full fixed bg-white shadow-lg z-20'>
			<Link href='/' className='w-32 h-12 relative'>
				<Image src='/images/brand.svg' alt='Brand Logo' fill />
			</Link>

			<div className='flex items-center gap-5'>
				<PlusCircleIcon className='w-7 h-7 cursor-pointer' />
				<Link className='relative' href='/cart'>
					<ShoppingCartIcon className='w-6 h-6 cursor-pointer' />
					<div className='absolute bg-black text-white rounded-full w-5 h-5 text-sm text-center top-[-0.725rem] right-[-1rem]'>
						{cart?.length}
					</div>
				</Link>
			</div>
		</nav>
	)
}
