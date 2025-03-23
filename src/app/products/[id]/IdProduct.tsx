"use client";
import { ButtonsProductId } from "@/components/IdProduct/ButtonsProductId";
import { ImageProductId } from "@/components/IdProduct/ImageProductId";
import { ReturnProductId } from "@/components/IdProduct/ReturnProductId";
import { StarsProductId } from "@/components/IdProduct/StarsProductId";
import { Modal } from "@/components/Modal/Modal";
import { useIsModal } from "@/store/isModal.store";
import { IProduct, useProductStore } from "@/store/store";
import { useEffect, useState } from "react";
import { FormChange } from "./FormChange";

type Props = {
	id: number;
};

export const IdProduct = ({ id }: Props) => {
	const { products, like_products } = useProductStore();
	const [product, setProduct] = useState<IProduct | null>(null);
	const { isModal } = useIsModal();

	useEffect(() => {
		setProduct(null);
		const foundProduct = products.find(product => product.id === Number(id));
		setProduct(foundProduct || null);
	}, [id, products]);

	const isLiked = like_products.some(p => p.id === product?.id);

	return (
		<>
			<section className='text-gray-400 bg-white body-font overflow-hidden'>
				<div className='container px-5 py-24 mx-auto'>
					<div className='lg:w-4/5 mx-auto flex flex-wrap'>
						<ImageProductId product={product} />

						<div className='lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0'>
							<h2 className='text-sm title-font text-gray-500 tracking-widest uppercase'>
								{product?.category}
							</h2>
							<h1 className='text-gray-900 text-3xl title-font font-bold mb-4'>
								{product?.title}
							</h1>

							<StarsProductId product={product} />

							<p className='text-2xl font-bold text-gray-900 mb-4'>
								${product?.price}
							</p>

							<p className='leading-relaxed text-gray-600 mb-6'>
								{product?.description}
							</p>

							<ButtonsProductId product={product} isLiked={isLiked} />

							<ReturnProductId />
						</div>
					</div>
				</div>
			</section>

			{isModal && product && (
				<Modal>
					<FormChange product={product} />
				</Modal>
			)}
		</>
	);
};
