"use client";

import { DASHBOARD_PAGES } from "@/config/pages-url.config";
import { IProduct, useProductStore } from "@/store/store";
import { Heart, Trash } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Props = {
	product: IProduct;
};

export const Product = ({ product }: Props) => {
	const { like_products, toggleLikeProduct, removeProduct } = useProductStore();

	const isLiked = like_products.some(p => p.id === product.id);

	return (
		<Link
			href={`${DASHBOARD_PAGES.PRODUCTS}/${product.id}`}
			key={product.id}
			className='group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 hover:scale-[1.02] block'
		>
			<div className='relative h-48 w-full'>
				<Image
					src={
						product.image ||
						"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
					}
					alt={product.title}
					layout='fill'
					objectFit='cover'
					className='object-cover transition-transform duration-300 group-hover:scale-110'
				/>
			</div>

			<div className='p-4'>
				<h2 className='text-lg font-semibold text-gray-900 line-clamp-1 mb-3'>
					{product.title}
				</h2>

				<p className='text-xl font-bold text-green-600 mb-3'>
					${product.price}
				</p>
				<div className='flex items-center mb-3'>
					<span className='text-yellow-500 mr-1'>★</span>
					<span className='text-gray-600 text-sm'>
						{product.rating.rate} ({product.rating.count} reviews)
					</span>
				</div>
				<p className='text-gray-700 text-sm line-clamp-3 mb-3'>
					{product.description}
				</p>
			</div>

			<div className='flex items-center justify-between pb-4 px-4'>
				<button
					onClick={e => {
						e.preventDefault();
						toggleLikeProduct(product);
					}}
					className='rounded-full p-2 bg-gray-100 hover:bg-red-100 text-red-500 hover:text-red-600 transition-colors'
				>
					<Heart
						size={18}
						className={isLiked ? "text-red-500" : "text-gray-500"}
					/>
				</button>

				<button
					onClick={e => {
						e.preventDefault();
						removeProduct(product.id);
					}}
					className='rounded-full p-2 bg-gray-100 hover:bg-red-100 text-red-500 hover:text-red-600 transition-colors'
				>
					<Trash size={18} />
				</button>
			</div>
		</Link>
	);
};
