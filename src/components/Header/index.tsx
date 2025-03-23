import { Logo } from "./Logo";
import { NavigatorNav } from "./NavigatorNav";

export const Header = () => {
	return (
		<>
			<header className='text-gray-600 bg-white body-font shadow-md'>
				<div className='container mx-auto flex flex-wrap p-5 items-center justify-between relative'>
					<Logo />

					<div className='flex-grow flex justify-center'>
						<NavigatorNav />
					</div>
				</div>
			</header>
		</>
	);
};
