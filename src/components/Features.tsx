export const Features = () => {
	return (
		<div className='bg-fur-pink-100 px-4 md:px-8 lg:px-16 py-[5%] grid grid-cols-1 md:flex justify-between items-center gap-4'>
			<div className='space-y-2'>
				<h4 className='font-semibold text-2xl'>Free Delivery</h4>
				<p className='text-fur-grey-100'>
					For all orders over $50, Lorem ipsum dolor sit amet.
				</p>
			</div>

			<div className='space-y-2'>
				<h4 className='font-semibold text-2xl'>90 Days Return</h4>
				<p className='text-fur-grey-100'>
					If goods have problem, Lorem ipsum dolor sit amet.
				</p>
			</div>

			<div className='space-y-2'>
				<h4 className='font-semibold text-2xl'>Secure Payment</h4>
				<p className='text-fur-grey-100'>
					100% secure payment, Lorem ipsum dolor sit amet.
				</p>
			</div>
		</div>
	)
}
