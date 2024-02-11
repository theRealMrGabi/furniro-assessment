import type { PropsWithChildren } from 'react'

import { Features, Footer, Navbar } from './'

export const Layout = ({ children }: PropsWithChildren) => {
	return (
		<>
			<Navbar />
			<main className='pt-20'>{children}</main>
			<Features />
			<Footer />
		</>
	)
}
