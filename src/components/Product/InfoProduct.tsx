import { IProduct } from "@/store/store";

type Props = {
	product: IProduct;
};

export const InfoProduct = ({ product }: Props) => {
	return (
		<div className='p-4'>
			<h2 className='text-lg font-semibold text-gray-900 line-clamp-1 mb-3'>
				{product.title}
			</h2>

			<p className='text-xl font-bold text-green-600 mb-3'>${product.price}</p>
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
	);
};
