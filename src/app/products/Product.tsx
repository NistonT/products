"use client";

import { ButtonsProduct } from "@/components/Product/ButtonsProduct";
import { ImageProduct } from "@/components/Product/ImageProduct";
import { InfoProduct } from "@/components/Product/InfoProduct";
import { DASHBOARD_PAGES } from "@/config/pages-url.config";
import { IProduct, useProductStore } from "@/store/store";
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
			<ImageProduct product={product} />

			<InfoProduct product={product} />

			<ButtonsProduct product={product} isLiked={isLiked} />
		</Link>
	);
};
