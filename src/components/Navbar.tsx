import Image from 'next/image'
import Link from 'next/link'
import { ShoppingCartIcon, PlusCircleIcon } from '@heroicons/react/24/outline'

export const Navbar = () => {
	return (
		<nav className='flex justify-between items-center px-4 md:px-8 lg:px-16 py-2 w-full fixed bg-white shadow-lg z-20'>
			<Link href='/' className='w-32 h-12 relative'>
				<Image src='/images/brand.svg' alt='Brand Logo' fill />
			</Link>

			<div className='flex items-center gap-5'>
				<PlusCircleIcon className='w-7 h-7 cursor-pointer' />
				<ShoppingCartIcon className='w-6 h-6 cursor-pointer' />
			</div>
		</nav>
	)
}
