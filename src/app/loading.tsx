export default function Loading() {
	return (
		<div>
			<div className='animate-pulse bg-slate-200 w-full h-60'></div>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4 md:px-8 lg:px-16 py-[5%]'>
				{/* eslint-disable-next-line no-unused-vars */}
				{[...Array(15)].map((_item, i) => (
					<div className='animate-pulse bg-slate-200 w-full h-72' key={i}></div>
				))}
			</div>
			<div className='animate-pulse bg-slate-200 w-full h-60'></div>
		</div>
	)
}
