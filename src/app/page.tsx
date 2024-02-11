import {
	dehydrate,
	HydrationBoundary,
	QueryClient
} from '@tanstack/react-query'

import { ProductCard, Hero } from '@/components'
import { GetProductsApi, productQueryKeys } from '@/services'

export default async function Home() {
	const queryClient = new QueryClient()

	const products = await queryClient.fetchQuery({
		queryKey: [productQueryKeys.getProducts],
		queryFn: GetProductsApi
	})

	return (
		<HydrationBoundary state={dehydrate(queryClient)}>
			<Hero pageTitle='Products' />
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4 md:px-8 lg:px-16 py-[5%]'>
				{products.map((product) => (
					<ProductCard product={product} key={product.id} />
				))}
			</div>
		</HydrationBoundary>
	)
}
