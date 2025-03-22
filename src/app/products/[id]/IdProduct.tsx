"use client";
import { DASHBOARD_PAGES } from "@/config/pages-url.config";
import { useIsModal } from "@/store/isModal.store";
import { IProduct, useProductStore } from "@/store/store";
import { ArrowLeft, Heart, Pen, X } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FormChange } from "./FormChange";

type Props = {
	id: number;
};

export const IdProduct = ({ id }: Props) => {
	const { products, like_products, toggleLikeProduct, removeProduct } =
		useProductStore();
	const [product, setProduct] = useState<IProduct | null>(null);
	const { isModal, setIsModal } = useIsModal();
	const { push } = useRouter();

	const handlerIsModal = () => {
		setIsModal();
	};

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
						<div className='lg:w-1/2 w-full lg:h-auto h-64 overflow-hidden rounded-lg shadow-lg'>
							<img
								alt={product?.title || "Product image"}
								src={
									product?.image ||
									"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
								}
								className='w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105'
							/>
						</div>

						<div className='lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0'>
							<h2 className='text-sm title-font text-gray-500 tracking-widest uppercase'>
								{product?.category}
							</h2>
							<h1 className='text-gray-900 text-3xl title-font font-bold mb-4'>
								{product?.title}
							</h1>

							<div className='flex items-center mb-4'>
								{[1, 2, 3, 4, 5].map(star => (
									<svg
										key={star}
										fill={
											star <= Math.floor(product?.rating?.rate || 0)
												? "currentColor"
												: "none"
										}
										stroke='currentColor'
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth='2'
										className={`w-4 h-4 ${
											star <= Math.floor(product?.rating?.rate || 0)
												? "text-yellow-500"
												: "text-gray-400"
										}`}
										viewBox='0 0 24 24'
									>
										<path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'></path>
									</svg>
								))}
								<span className='ml-3 text-gray-500 text-sm'>
									({product?.rating?.count} reviews)
								</span>
							</div>

							<p className='text-2xl font-bold text-gray-900 mb-4'>
								${product?.price}
							</p>

							<p className='leading-relaxed text-gray-600 mb-6'>
								{product?.description}
							</p>

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

							<div className='flex items-center justify-start'>
								<Link
									href={DASHBOARD_PAGES.PRODUCTS}
									className='flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 transition-all duration-300 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-50 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1'
								>
									<ArrowLeft size={16} className='text-gray-600' />
									Вернуться
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>

			{isModal && product && (
				<div className='fixed inset-0 bg-white flex justify-center items-center z-50'>
					<div className='bg-white p-6 rounded-lg shadow-lg max-w-lg w-full'>
						<h2 className='text-xl font-bold mb-4'>Редактировать товар</h2>
						<FormChange product={product} />
					</div>
				</div>
			)}
		</>
	);
};
