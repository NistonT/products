import { DASHBOARD_PAGES } from "@/config/pages-url.config";
import Link from "next/link";
import { NavigatorNav } from "./NavigatorNav";

export const Header = () => {
	return (
		<>
			<header className='text-gray-600 bg-white body-font shadow-md'>
				<div className='container mx-auto flex flex-wrap p-5 items-center justify-between relative'>
					<Link href={DASHBOARD_PAGES.HOME}>
						<div className='flex title-font font-medium items-center text-gray-900 hover:text-red-500 transition-colors'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								stroke='currentColor'
								className='w-10 h-10 text-red-500 bg-gray-100 rounded-full p-2 shadow-lg'
								viewBox='0 0 24 24'
							>
								<path d='M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5'></path>
							</svg>
							<span className='ml-3 text-xl font-bold text-gray-900'>
								Продукты
							</span>
						</div>
					</Link>

					<div className='flex-grow flex justify-center'>
						<NavigatorNav />
					</div>
				</div>
			</header>
		</>
	);
};
