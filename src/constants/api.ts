import axios, { AxiosRequestConfig } from "axios";

const api = () => {
	return {
		get: async (url: string, options?: AxiosRequestConfig) => {
			return await axios.get(url, options);
		},
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		post: async (url: string, data?: any, options?: AxiosRequestConfig) => {
			return await axios.post(url, data, options);
		},
		delete: async (url: string, options?: AxiosRequestConfig) => {
			return await axios.delete(url, options);
		},
	};
};
export default api;
