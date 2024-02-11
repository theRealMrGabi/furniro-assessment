import { forwardRef } from 'react'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
	label?: string
	errorMessage?: string
}

export const Input = forwardRef<HTMLInputElement, Props>(
	(
		{ label, errorMessage, className, type = 'text', required, ...rest },
		ref
	) => {
		return (
			<div className='w-full mb-5'>
				{label && (
					<div className='flex justify-between items-center text-xs font-bold mb-[0.625rem]'>
						<label htmlFor={rest.name} className='text-grey-100'>
							{label}
							{required && <span className='text-red-600'> *</span>}
						</label>
					</div>
				)}

				<div className='rounded-md border border-grey-300 flex items-center gap-x-3 w-full px-4 py-3 shadow-input bg-white'>
					<input
						{...rest}
						ref={ref}
						type={type}
						className={`w-full outline-none focus:outline-none placeholder:text-grey-200 text-[0.75rem] leading-5 font-normal ${className}`}
					/>
				</div>

				{errorMessage && (
					<p className='text-red-600 text-xs pt-2'>{errorMessage}</p>
				)}
			</div>
		)
	}
)

Input.displayName = 'Input'
