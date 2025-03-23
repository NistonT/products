"use client";
import { DASHBOARD_PAGES } from "@/config/pages-url.config";
import { IProduct, useProductStore } from "@/store/store";
import {
	AlignLeft,
	DollarSign,
	ImageIcon,
	List,
	PlusCircle,
	Star,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const CreateProduct = () => {
	const [product, setProduct] = useState<IProduct>({
		category: "",
		description: "",
		id: Date.now(),
		image: "",
		price: 0,
		rating: { rate: 0, count: 0 },
		title: "",
	});

	const { push } = useRouter();

	const [errors, setErrors] = useState<Partial<IProduct>>({});

	const addProduct = useProductStore(state => state.addProduct);

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setProduct(prev => ({ ...prev, [name]: value }));
		setErrors(prev => ({ ...prev, [name]: "" }));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		const newErrors: Partial<IProduct> = {};
		if (!product.title.trim()) newErrors.title = "Название товара обязательно";
		if (!product.category.trim()) newErrors.category = "Категория обязательна";
		if (!product.description.trim())
			newErrors.description = "Описание обязательно";
		if (!isValidUrl(product.image)) {
			product.image = "https://semantic-ui.com/images/wireframe/image.png";
		}

		if (Object.keys(newErrors).length > 0) {
			setErrors(newErrors);
			return;
		}

		addProduct([product]);

		setProduct({
			category: "",
			description: "",
			id: Date.now(),
			image: "",
			price: 0,
			rating: { rate: 0, count: 0 },
			title: "",
		});
		push(DASHBOARD_PAGES.PRODUCTS);
	};

	const isValidUrl = (urlString: string): boolean => {
		try {
			new URL(urlString);
			return true;
		} catch (e) {
			return false;
		}
	};

	return (
		<section className='text-gray-600 body-font'>
			<div className='container mx-auto px-5 py-12'>
				<h2 className='text-2xl font-bold text-center text-gray-900 mb-8'>
					Создать новый товар
				</h2>
				<form
					onSubmit={handleSubmit}
					className='bg-white rounded-lg shadow-md p-8 max-w-2xl mx-auto space-y-6'
				>
					<div className='flex flex-col space-y-1'>
						<div className='flex items-center space-x-3'>
							<AlignLeft size={20} className='text-gray-500' />
							<input
								type='text'
								name='title'
								value={product.title}
								onChange={handleChange}
								placeholder='Название товара'
								className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500'
							/>
						</div>
						{errors.title && (
							<p className='text-red-500 text-sm'>{errors.title}</p>
						)}
					</div>

					<div className='flex flex-col space-y-1'>
						<div className='flex items-center space-x-3'>
							<List size={20} className='text-gray-500' />
							<input
								type='text'
								name='category'
								value={product.category}
								onChange={handleChange}
								placeholder='Категория товара'
								className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500'
							/>
						</div>
						{errors.category && (
							<p className='text-red-500 text-sm'>{errors.category}</p>
						)}
					</div>

					<div className='flex flex-col space-y-1'>
						<div className='flex items-center space-x-3'>
							<DollarSign size={20} className='text-gray-500' />
							<input
								type='number'
								name='price'
								value={isNaN(product.price) ? 0 : product.price}
								onChange={handleChange}
								placeholder='Цена товара'
								className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500'
							/>
						</div>
						{errors.price && (
							<p className='text-red-500 text-sm'>{errors.price}</p>
						)}
					</div>
					<div className='flex flex-col space-y-1'>
						<div className='flex items-center space-x-3'>
							<Star size={20} className='text-gray-500' />
							<input
								type='number'
								name='rating.rate'
								value={product.rating.rate}
								onChange={e =>
									setProduct(prev => ({
										...prev,
										rating: {
											...prev.rating,
											rate: parseFloat(e.target.value),
										},
									}))
								}
								placeholder='Рейтинг товара'
								className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500'
								step='0.1'
							/>
						</div>
					</div>

					<div className='flex flex-col space-y-1'>
						<div className='flex items-center space-x-3'>
							<ImageIcon size={20} className='text-gray-500' />
							<input
								type='text'
								name='image'
								value={product.image}
								onChange={handleChange}
								placeholder='Ссылка на изображение'
								className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500'
							/>
						</div>
						{errors.image && (
							<p className='text-red-500 text-sm'>{errors.image}</p>
						)}
					</div>

					<div className='flex flex-col space-y-1'>
						<label className='flex items-center space-x-2 text-gray-700'>
							<AlignLeft size={20} className='text-gray-500' />
							<span>Описание товара</span>
						</label>
						<textarea
							name='description'
							value={product.description}
							onChange={handleChange}
							placeholder='Введите описание товара...'
							rows={4}
							className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500'
						></textarea>
						{errors.description && (
							<p className='text-red-500 text-sm'>{errors.description}</p>
						)}
					</div>

					<button
						type='submit'
						className='w-full inline-flex justify-center items-center px-6 py-3 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition-all shadow-md'
					>
						<PlusCircle size={20} className='mr-2' />
						Создать товар
					</button>
				</form>
			</div>
		</section>
	);
};
