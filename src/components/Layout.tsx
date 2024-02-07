import { PropsWithChildren } from 'react'
import Image from 'next/image'
import classNames from 'classnames'

import { Features, Footer, Navbar } from './'

interface Props {
	heroBg: boolean
}

export const Layout = ({ children, heroBg }: PropsWithChildren<Props>) => {
	return (
		<>
			<Navbar />

			<div className='h-[20rem] lg:h-[22rem] bg-main w-full bg-no-repeat bg-cover'>
				<div className='z-20 grid place-content-center place-items-center h-full'>
					<div className='w-16 h-16 relative'>
						<Image src='/images/furniro-short.svg' alt='furniro brand' fill />
					</div>
					<h3 className='font-semibold text-3xl'>Products</h3>
				</div>
			</div>

			<main
				className={classNames({
					'pt-20': !heroBg
				})}
			>
				{children}
			</main>

			<Features />
			<Footer />
		</>
	)
}
