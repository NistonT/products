import { navigation } from "@/constants/navigation.constants";
import Link from "next/link";

export const NavigatorNav = () => {
	return (
		<nav className='md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center'>
			{navigation.map(nav => (
				<Link
					key={nav.title}
					href={nav.href}
					className='flex items-center px-4 py-2 rounded-lg text-gray-600 hover:text-white hover:bg-red-500 transition-all duration-300'
				>
					{nav.icon && (
						<span className='mr-2'>
							<nav.icon size={18} />
						</span>
					)}
					{nav.title}
				</Link>
			))}
		</nav>
	);
};
