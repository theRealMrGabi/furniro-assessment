export default function Loading() {
	return (
		<div className='px-4 md:px-8 lg:px-16 py-[5%]'>
			<div className='flex flex-col md:flex-row gap-5 lg:gap-20 w-full'>
				<div className='animate-pulse bg-slate-200 h-80 w-full md:w-1/2 lg:w-2/5'></div>
				<div className='animate-pulse bg-slate-200 h-80 w-full md:w-1/2 lg:w-3/5 p-4'></div>
			</div>
			<div className='animate-pulse bg-slate-200 w-full h-60 my-12'></div>
		</div>
	)
}
