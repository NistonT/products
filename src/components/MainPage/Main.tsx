import { ImageSection } from "./ImageSection";
import { RightSection } from "./RightSection";

export const Main = () => {
	return (
		<>
			<section className='text-gray-400 bg-white body-font w-full container mx-auto'>
				<div className=' flex px-5 py-24 md:flex-row flex-col items-center'>
					<ImageSection />
					<RightSection />
				</div>
			</section>
		</>
	);
};
