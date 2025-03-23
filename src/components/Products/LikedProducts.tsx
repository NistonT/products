"use client";
import { useIsLiked } from "@/store/isLiked.store";
import { useProductStore } from "@/store/store";
import { Grid, Heart } from "lucide-react";

export const LikedProducts = () => {
	const { isLike, setIsLike } = useIsLiked();
	const { like_products } = useProductStore();

	const handlerIsLike = () => {
		setIsLike();
	};

	return (
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
	);
};
