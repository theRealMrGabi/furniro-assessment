export default function Loading() {
	return (
		<div>
			<div className='animate-pulse bg-slate-200 w-full h-60'></div>
			<div className='px-4 md:px-8 lg:px-16 py-[5%] flex flex-col md:flex-row gap-5'>
				<div className='md:w-3/5 lg:w-3/4 space-y-6 border rounded-lg p-4'>
					{/* eslint-disable-next-line no-unused-vars */}
					{[...Array(5)].map((_item, i) => (
						<div className='animate-pulse bg-slate-200 h-40' key={i}></div>
					))}
				</div>

				<div className='md:w-2/5 lg:w-1/4 border rounded-lg h-fit'>
					<div className='animate-pulse bg-slate-200 h-80'></div>
				</div>
			</div>
		</div>
	)
}
