import Link from 'next/link'

export default function NotFound() {
	return (
		<div className='grid place-items-center w-full h-[45vh]'>
			<h2 className='text-3xl'>Page Not Found</h2>
			<p>Could not find requested resource</p>
			<Link href='/' className='font-bold text-fur-gold-100'>
				Return Home
			</Link>
		</div>
	)
}
