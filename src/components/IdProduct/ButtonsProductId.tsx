"use client";
import { DASHBOARD_PAGES } from "@/config/pages-url.config";
import { useIsModal } from "@/store/isModal.store";
import { IProduct, useProductStore } from "@/store/store";
import { Heart, Pen, X } from "lucide-react";
import { useRouter } from "next/navigation";

type Props = {
	product: IProduct | null;
	isLiked: boolean;
};

export const ButtonsProductId = ({ product, isLiked }: Props) => {
	const { toggleLikeProduct, removeProduct } = useProductStore();
	const { setIsModal } = useIsModal();
	const { push } = useRouter();

	const handlerIsModal = () => {
		setIsModal();
	};
	return (
		<div className='flex items-center space-x-4 mb-6'>
			<button
				onClick={() => toggleLikeProduct(product!)}
				className='rounded-full w-10 h-10 bg-gray-100 p-0 border-0 inline-flex items-center justify-center text-gray-500 hover:text-red-500 transition-colors'
			>
				<Heart size={20} className={isLiked ? "text-red-500" : ""} />
			</button>

			<button
				onClick={() => {
					removeProduct(product!.id);
					push(DASHBOARD_PAGES.PRODUCTS);
				}}
				className='rounded-full w-10 h-10 bg-gray-100 p-0 border-0 inline-flex items-center justify-center text-gray-500 hover:text-red-500 transition-colors'
			>
				<X size={20} />
			</button>

			<button
				onClick={handlerIsModal}
				className='rounded-full w-10 h-10 bg-gray-100 p-0 border-0 inline-flex items-center justify-center text-gray-500 hover:text-red-500 transition-colors'
			>
				<Pen size={20} />
			</button>
		</div>
	);
};
