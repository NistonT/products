"use client";
import { productsService } from "@/services/products.service";
import { useProductStore } from "@/store/store";
import { useQuery } from "@tanstack/react-query";
import { Grid, Heart } from "lucide-react";
import { useEffect, useState } from "react";
import { Product } from "./Product";

export const Products = () => {
	const { products, like_products, isInitialized, initializeProducts } =
		useProductStore();
	const [isLike, setIsLike] = useState<boolean>(false);
	const [currentPage, setCurrentPage] = useState<number>(1);
	const [searchTerm, setSearchTerm] = useState<string>("");
	const [selectedCategory, setSelectedCategory] = useState<string>("");
	const [sortByPrice, setSortByPrice] = useState<"asc" | "desc" | "">("");
	const itemsPerPage = 4;

	const { data } = useQuery({
		queryKey: ["getProducts"],
		queryFn: () => productsService.getProducts(),
		select: data => data.data,
	});

	const handlerIsLike = () => {
		setIsLike(!isLike);
	};

	useEffect(() => {
		if (!data || isInitialized) return;
		initializeProducts(data);
	}, [data, isInitialized, initializeProducts]);

	const filteredAndSortedProducts = (isLike ? like_products : products)
		.filter(product => {
			return (
				product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
				product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
				product.category.toLowerCase().includes(searchTerm.toLowerCase())
			);
		})
		.filter(product => {
			return selectedCategory ? product.category === selectedCategory : true;
		})
		.sort((a, b) => {
			if (sortByPrice === "asc") {
				return a.price - b.price;
			} else if (sortByPrice === "desc") {
				return b.price - a.price;
			}
			return 0;
		});

	const paginatedProducts = filteredAndSortedProducts.slice(
		(currentPage - 1) * itemsPerPage,
		currentPage * itemsPerPage
	);

	const handlePageChange = (page: number) => {
		setCurrentPage(page);
	};

	const totalPages = Math.ceil(filteredAndSortedProducts.length / itemsPerPage);

	const categories = Array.from(new Set(products.map(p => p.category)));

	return (
		<div className='max-w-6xl mx-auto bg-white rounded-lg shadow-md p-6'>
			<div className='flex items-center justify-between mb-6'>
				<div className='flex items-center space-x-2 text-red-500 font-medium'>
					<Heart size={20} className='text-red-500' />
					<span>Избранные продукты: {like_products.length}</span>
				</div>

				<button
					type='button'
					onClick={handlerIsLike}
					className='flex items-center space-x-1 text-red-600 hover:text-red-700 transition-colors font-medium'
				>
					<Grid size={18} className='text-red-600' />
					<span>{!isLike ? "Показать избранные" : "Показать все"}</span>
				</button>
			</div>

			<div className='mb-6 space-y-4'>
				<input
					type='text'
					value={searchTerm}
					onChange={e => setSearchTerm(e.target.value)}
					placeholder='Поиск по названию, описанию или категории...'
					className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500'
				/>

				<select
					value={selectedCategory}
					onChange={e => setSelectedCategory(e.target.value)}
					className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500'
				>
					<option value=''>Все категории</option>
					{categories.map(category => (
						<option key={category} value={category}>
							{category}
						</option>
					))}
				</select>

				<div className='flex items-center space-x-4'>
					<span className='text-gray-700'>Сортировать по цене:</span>
					<button
						onClick={() => setSortByPrice(sortByPrice === "asc" ? "" : "asc")}
						className={`px-4 py-2 rounded ${
							sortByPrice === "asc"
								? "bg-red-600 text-white"
								: "bg-gray-200 text-gray-700"
						}`}
					>
						По возрастанию
					</button>
					<button
						onClick={() => setSortByPrice(sortByPrice === "desc" ? "" : "desc")}
						className={`px-4 py-2 rounded ${
							sortByPrice === "desc"
								? "bg-red-600 text-white"
								: "bg-gray-200 text-gray-700"
						}`}
					>
						По убыванию
					</button>
				</div>
			</div>

			<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
				{paginatedProducts.map(product => (
					<Product key={product.id} product={product} />
				))}
			</div>

			{totalPages > 1 && (
				<div className='flex justify-center mt-6 space-x-2'>
					<button
						onClick={() => handlePageChange(currentPage - 1)}
						disabled={currentPage === 1}
						className='px-4 py-2 bg-gray-200 text-gray-700 rounded disabled:bg-gray-100 disabled:text-gray-400'
					>
						Назад
					</button>

					{Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
						<button
							key={page}
							onClick={() => handlePageChange(page)}
							className={`px-4 py-2 ${
								currentPage === page
									? "bg-red-600 text-white"
									: "bg-gray-200 text-gray-700"
							} rounded`}
						>
							{page}
						</button>
					))}

					<button
						onClick={() => handlePageChange(currentPage + 1)}
						disabled={currentPage === totalPages}
						className='px-4 py-2 bg-gray-200 text-gray-700 rounded disabled:bg-gray-100 disabled:text-gray-400'
					>
						Вперед
					</button>
				</div>
			)}
		</div>
	);
};
