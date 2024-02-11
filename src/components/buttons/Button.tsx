'use client'

import type { PropsWithChildren } from 'react'
import classNames from 'classnames'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: 'primary' | 'secondary' | 'danger'
}

export const Button = ({
	variant = 'primary',
	type = 'button',
	children,
	className,
	...rest
}: PropsWithChildren<ButtonProps>) => {
	return (
		<button
			{...rest}
			type={type}
			className={classNames(
				`w-fit border text-base py-2 rounded-lg ${className}`,
				{
					'opacity-40 cursor-not-allowed': rest.disabled,
					'border-fur-gold-100 text-black hover:text-white hover:bg-fur-gold-100':
						variant === 'primary',
					'bg-fur-gold-100 text-white': variant === 'secondary'
				}
			)}
		>
			{children}
		</button>
	)
}
