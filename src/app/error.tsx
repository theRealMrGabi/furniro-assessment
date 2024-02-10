'use client'

import { useEffect } from 'react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'

export default function Error({
	error,
	reset
}: {
	error: Error & { digest?: string }
	reset: () => void
}) {
	useEffect(() => {
		// Log the error to an error reporting service
		console.error('page error --->', error)
	}, [error])

	return (
		<div className='grid place-items-center w-full h-[30vh]'>
			<div className='flex items-center gap-4'>
				<ExclamationTriangleIcon className='w-10 h-10 text-red-700' />
				<h2>Something went wrong!</h2>
			</div>
			<button
				className='font-bold text-fur-gold-100'
				onClick={
					// Attempt to recover by trying to re-render the segment
					() => reset()
				}
			>
				Try again
			</button>
		</div>
	)
}
