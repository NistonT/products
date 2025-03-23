import { DASHBOARD_PAGES } from "@/config/pages-url.config";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export const ReturnProductId = () => {
	return (
		<div className='flex items-center justify-start'>
			<Link
				href={DASHBOARD_PAGES.PRODUCTS}
				className='flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 transition-all duration-300 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-50 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1'
			>
				<ArrowLeft size={16} className='text-gray-600' />
				Вернуться
			</Link>
		</div>
	);
};
