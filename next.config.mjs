/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	distDir: 'build',
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'dev-images-carry1st-products.s3.eu-west-2.amazonaws.com'
			}
		]
	}
}

export default nextConfig
