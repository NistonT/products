import { IProduct } from "@/store/store";

type Props = {
	product: IProduct | null;
};

export const StarsProductId = ({ product }: Props) => {
	return (
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
	);
};
