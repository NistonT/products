import { IProduct } from "@/store/store";
import Image from "next/image";

type Props = {
	product: IProduct;
};

export const ImageProduct = ({ product }: Props) => {
	return (
		<>
			<div className='relative h-48 w-full'>
				<Image
					src={
						product.image ||
						"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
					}
					alt={product.title}
					layout='fill'
					objectFit='cover'
					className='object-cover transition-transform duration-300 group-hover:scale-110'
				/>
			</div>
		</>
	);
};
