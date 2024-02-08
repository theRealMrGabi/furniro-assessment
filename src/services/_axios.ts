import axios, {
	AxiosError,
	AxiosResponse,
	InternalAxiosRequestConfig
} from 'axios'
import { toast } from 'react-hot-toast'

const apiResource = () => {
	const baseURL = process.env.NEXT_PUBLIC_BASEURL

	const service = axios.create({
		baseURL,
		withCredentials: false,
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			'Access-Control-Allow-Methods': '*',
			'Access-Control-Allow-Origin': baseURL
		}
	})

	service.interceptors.request.use((config: InternalAxiosRequestConfig) => {
		/* we can put token here, so that it can be added for each api call that is intercepted e.g passing authorization token for each request */
		return config
	})

	service.interceptors.response.use(
		(response: AxiosResponse) => response,
		(error: AxiosError) => {
			if (error?.response === undefined)
				toast.error('Unable to connect to resource')
			else {
				const errorData = error?.response?.data as Record<
					string,
					string | object
				>

				const errorMessage = (errorData?.message ||
					errorData.error ||
					'Something went wrong') as string

				if (errorMessage) {
					toast.error(errorMessage)
				}

				return Promise.reject(errorData)
			}
		}
	)

	interface IPostProps {
		url: string
		payload?: object
	}

	return {
		get: async (url: string) => {
			try {
				const data = service.get(url)
				const resolvedData = await Promise.resolve(data)
				return resolvedData?.data
			} catch (error) {
				return Promise.reject(error)
			}
		},

		post: async ({ url, payload }: IPostProps) => {
			try {
				const data = service.post(url, payload)
				const resolvedData = await Promise.resolve(data)
				return resolvedData?.data
			} catch (error) {
				return Promise.reject(error)
			}
		},

		patch: async ({ url, payload }: IPostProps) => {
			try {
				const data = service.patch(url, payload)
				const resolvedData = await Promise.resolve(data)
				return resolvedData?.data
			} catch (error) {
				return Promise.reject(error)
			}
		},

		delete: async ({ url, payload }: IPostProps) => {
			try {
				const data = service.delete(url, { data: payload })
				const resolvedData = await Promise.resolve(data)
				return resolvedData?.data
			} catch (error) {
				return Promise.reject(error)
			}
		},

		put: async ({ url, payload }: IPostProps) => {
			try {
				const data = service.put(url, payload)
				const resolvedData = await Promise.resolve(data)
				return resolvedData?.data
			} catch (error) {
				return Promise.reject(error)
			}
		}
	}
}

export const _axios = apiResource()
