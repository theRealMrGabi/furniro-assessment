import Image from 'next/image'

export const Hero = ({ pageTitle }: { pageTitle: string }) => {
	return (
		<div className='h-[20rem] lg:h-[22rem] bg-main w-full bg-no-repeat bg-cover'>
			<div className='z-20 grid place-content-center place-items-center h-full'>
				<div className='w-16 h-16 relative'>
					<Image src='/images/furniro-short.svg' alt='furniro brand' fill />
				</div>
				<h3 className='font-semibold text-3xl'>{pageTitle}</h3>
			</div>
		</div>
	)
}
