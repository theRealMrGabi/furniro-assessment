import { ProductCard } from '@/components'

export default function Home() {
	return (
		<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4 md:px-8 lg:px-16 py-[5%]'>
			{/* eslint-disable-next-line no-unused-vars */}
			{[...Array(9)].map((_item, i) => (
				<ProductCard key={i} />
			))}
		</div>
	)
}
