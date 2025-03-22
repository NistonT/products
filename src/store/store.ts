import { create } from "zustand";

export interface IRating {
	count: number;
	rate: number;
}

export interface IProduct {
	category: string;
	description: string;
	id: number;
	image: string;
	price: number;
	rating: IRating;
	title: string;
}

interface IProducts {
	products: IProduct[];
	like_products: IProduct[];
	count_like_products: number;
	isInitialized: boolean;
	getProduct: (id: number | string) => IProduct | null;
	addProduct: (newProducts: IProduct[]) => void;
	changeProduct: (id: number | string, data: Partial<IProduct>) => void;
	removeProduct: (idProduct: number) => void;
	toggleLikeProduct: (product: IProduct) => void;
	initializeProducts: (initialProducts: IProduct[]) => void;
}

export const useProductStore = create<IProducts>((set, get) => ({
	products: [],
	like_products: [],
	count_like_products: 0,
	isInitialized: false,

	initializeProducts: initialProducts =>
		set(() => ({
			products: initialProducts,
			isInitialized: true,
		})),

	getProduct: id => {
		const { products } = get();
		return products.find(product => product.id === Number(id)) || null;
	},
	addProduct: newProducts =>
		set(state => {
			const uniqueProducts = newProducts.filter(
				newProduct =>
					!state.products.some(product => product.id === newProduct.id)
			);

			return {
				products: [...state.products, ...uniqueProducts],
			};
		}),
	changeProduct: (id, data) =>
		set(state => ({
			products: state.products.map(product =>
				product.id === id ? { ...product, ...data } : product
			),
		})),
	toggleLikeProduct: product =>
		set(state => {
			const isLiked = state.like_products.some(p => p.id === product.id);

			if (isLiked) {
				state.count_like_products = state.count_like_products - 1;
				return {
					like_products: state.like_products.filter(p => p.id !== product.id),
				};
			} else {
				state.count_like_products = state.count_like_products + 1;
				return {
					like_products: [...state.like_products, product],
				};
			}
		}),
	removeProduct: id =>
		set(state => {
			const updatedProducts = state.products.filter(
				product => product.id !== id
			);
			const updatedLikeProducts = state.like_products.filter(
				product => product.id !== id
			);
			const newCountLikeProducts = updatedLikeProducts.length;

			return {
				products: updatedProducts,
				like_products: updatedLikeProducts,
				count_like_products: newCountLikeProducts,
			};
		}),
}));
