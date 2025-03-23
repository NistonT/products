import Image from "next/image";

export const ImageSection = () => {
	return (
		<div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0'>
			<Image
				className='object-cover object-center rounded-lg shadow-lg transition-transform duration-300 hover:scale-105'
				alt='hero'
				width={720}
				height={600}
				src='https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg'
			/>
		</div>
	);
};
