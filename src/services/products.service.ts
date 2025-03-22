import { axiosClassic } from "@/api/interceptors";

class ProductsService {
	private BASE_URL = "/products";

	async getProducts() {
		const response = await axiosClassic.get(`${this.BASE_URL}`);
		return response;
	}
}

export const productsService = new ProductsService();
