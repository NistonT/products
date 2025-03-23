import { IProduct } from "@/store/store";

type Props = {
	product: IProduct | null;
};

export const ImageProductId = ({ product }: Props) => {
	return (
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
	);
};
