import { IProduct, useProductStore } from "@/store/store";
import { Heart, Trash } from "lucide-react";

type Props = {
	product: IProduct;
	isLiked: boolean;
};

export const ButtonsProduct = ({ product, isLiked }: Props) => {
	const { toggleLikeProduct, removeProduct } = useProductStore();

	return (
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
	);
};
