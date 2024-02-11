'use client'
import { useState } from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import toast from 'react-hot-toast'

import { Button, Hero, Input } from '@/components'
import { AddProductSchema } from '@/validations'
import { AddProductPayload, ProductStatus } from '@/interface'
import { AddProductApi, productQueryKeys } from '@/services'

export default function CreateProduct() {
	const queryClient = useQueryClient()
	const [productStatus, setProductStatus] = useState<ProductStatus>('ACTIVE')

	const {
		register,
		handleSubmit,
		formState: { errors },
		setValue,
		reset
	} = useForm<AddProductPayload>({
		resolver: yupResolver(AddProductSchema),
		mode: 'all',
		defaultValues: {
			name: '10 Lives',
			description: '10 Lives product bundle.',
			price: 1,
			currencyCode: 'USD',
			currencySymbol: '$',
			quantity: 10,
			imageLocation:
				'https://dev-images-carry1st-products.s3.eu-west-2.amazonaws.com/74e517a3-0615-4019-bb08-cc697cf4e747.png',
			status: 'ACTIVE'
		}
	})

	const { mutate, isPending } = useMutation({
		mutationFn: AddProductApi,
		onSuccess: () => {
			toast.success('Product created')
			queryClient.invalidateQueries({
				queryKey: [productQueryKeys.getProducts]
			})

			reset(undefined, {
				keepValues: false,
				keepDefaultValues: false,
				keepDirtyValues: false
			})
			setProductStatus('ACTIVE')
		}
	})

	const onSubmit = handleSubmit((data) => mutate(data))

	return (
		<>
			<Hero pageTitle='Add Product' />
			<form
				className='px-4 md:px-8 lg:px-16 py-[5%] md:w-3/5 xl:w-2/5 mx-auto'
				onSubmit={onSubmit}
				autoComplete='off'
			>
				<Input
					label='Name'
					placeholder='Product name'
					{...register('name')}
					errorMessage={errors.name?.message}
				/>

				<Input
					label='Description'
					placeholder='Product description'
					{...register('description')}
					errorMessage={errors.description?.message}
				/>

				<Input
					label='Price'
					placeholder='Product price'
					{...register('price')}
					errorMessage={errors.price?.message}
					type='number'
				/>

				<Input
					label='Currency code'
					placeholder='Product currency code'
					{...register('currencyCode')}
					errorMessage={errors.currencyCode?.message}
				/>

				<Input
					label='Currency symbol'
					placeholder='Product currency symbol'
					{...register('currencySymbol')}
					errorMessage={errors.currencySymbol?.message}
				/>

				<Input
					label='Quantity'
					placeholder='Product quantity'
					{...register('quantity')}
					errorMessage={errors.quantity?.message}
					type='number'
				/>

				<Input
					label='Image URL'
					placeholder='Product image URL'
					{...register('imageLocation')}
					errorMessage={errors.imageLocation?.message}
				/>

				<div>
					<label htmlFor='status' className='text-grey-100 text-xs font-bold'>
						Product status
					</label>

					<select
						value={productStatus}
						className='border border-grey-300 px-4 py-3 shadow-input bg-white rounded-md text-sm w-full mt-[0.625rem]'
						onChange={(e) => {
							const selectedValue = e.target.value as ProductStatus
							setProductStatus(selectedValue)
							setValue('status', selectedValue)
						}}
					>
						<option value='ACTIVE'>Active</option>
						<option value='INACTIVE'>Inactive</option>
					</select>
				</div>

				<Button
					disabled={isPending}
					className='px-8 mt-5'
					variant='secondary'
					onClick={onSubmit}
				>
					Add Product
				</Button>
			</form>
		</>
	)
}
