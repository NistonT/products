"use client";
import { useIsModal } from "@/store/isModal.store";
import { IProduct, useProductStore } from "@/store/store";
import { AlignLeft, DollarSign, ImageIcon, Star } from "lucide-react";
import { useState } from "react";

type Props = {
	product: IProduct;
};

export const FormChange = ({ product }: Props) => {
	const [formData, setFormData] = useState<IProduct>(product);
	const changeProduct = useProductStore(state => state.changeProduct);
	const { isModal, setIsModal } = useIsModal();

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setFormData(prev => ({ ...prev, [name]: value }));
	};

	const handleRatingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;
		setFormData(prev => ({
			...prev,
			rating: {
				...prev.rating,
				rate: parseFloat(value),
			},
		}));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		changeProduct(product.id, formData);
		setIsModal();
	};

	return (
		<form onSubmit={handleSubmit} className='space-y-4'>
			<div className='flex items-center space-x-3'>
				<AlignLeft size={20} className='text-gray-500' />
				<input
					type='text'
					name='title'
					value={formData.title}
					onChange={handleChange}
					placeholder='Название товара'
					className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
				/>
			</div>

			<div className='flex items-center space-x-3'>
				<AlignLeft size={20} className='text-gray-500' />
				<input
					type='text'
					name='category'
					value={formData.category}
					onChange={handleChange}
					placeholder='Категория товара'
					className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
				/>
			</div>

			<div className='flex items-center space-x-3'>
				<DollarSign size={20} className='text-gray-500' />
				<input
					type='number'
					name='price'
					value={formData.price}
					onChange={handleChange}
					placeholder='Цена товара'
					className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
				/>
			</div>

			<div className='flex items-center space-x-3'>
				<Star size={20} className='text-gray-500' />
				<input
					type='number'
					name='rating.rate'
					value={formData.rating.rate}
					onChange={handleRatingChange}
					placeholder='Рейтинг товара'
					step='0.1'
					className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
				/>
			</div>

			<div className='flex items-center space-x-3'>
				<ImageIcon size={20} className='text-gray-500' />
				<input
					type='text'
					name='image'
					value={formData.image}
					onChange={handleChange}
					placeholder='Ссылка на изображение'
					className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
				/>
			</div>

			<div className='flex flex-col space-y-1'>
				<label className='flex items-center space-x-2 text-gray-700'>
					<AlignLeft size={20} className='text-gray-500' />
					<span>Описание товара</span>
				</label>
				<textarea
					name='description'
					value={formData.description}
					onChange={handleChange}
					placeholder='Введите описание товара...'
					rows={4}
					className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
				></textarea>
			</div>

			<div className='flex justify-end space-x-4'>
				<button
					onClick={setIsModal}
					type='button'
					className='px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300'
				>
					Отмена
				</button>
				<button
					type='submit'
					className='px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700'
				>
					Сохранить
				</button>
			</div>
		</form>
	);
};
