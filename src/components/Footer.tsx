import Image from 'next/image'
import Link from 'next/link'

const footerLinks = ['Support', 'Contact', 'Pricing', 'Career', 'Blog', 'FAQ']

export const Footer = () => {
	return (
		<footer className='bg-white px-4 md:px-8 lg:px-16 py-[5%]'>
			<div className='grid md:flex justify-between items-center gap-4 mb-4'>
				<Link href='/' className='w-32 h-12 relative'>
					<Image src='/images/brand.svg' alt='Brand Logo' fill />
				</Link>

				<div className='flex gap-4 items-center flex-wrap'>
					{footerLinks.map((link) => (
						<Link href='#' key={link} className='hover-animate'>
							{link}
						</Link>
					))}
				</div>
			</div>

			<div className='border-t text-center pt-4 text-sm text-fur-grey-100'>
				Copyright &copy; {new Date().getFullYear()}. All rights reserved
			</div>
		</footer>
	)
}
