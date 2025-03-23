import { DASHBOARD_PAGES } from "@/config/pages-url.config";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const RightSection = () => {
	return (
		<div className='lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center'>
			<h1 className='title-font sm:text-4xl text-3xl mb-4 font-bold text-black'>
				Лучшие товары,
				<br className='hidden lg:inline-block' /> доставленные прямо к вам
			</h1>
			<p className='mb-8 leading-relaxed text-black'>
				Откройте для себя широкий ассортимент высококачественных товаров: от
				электроники и модной одежды до домашних аксессуаров. Мы предлагаем
				быструю доставку, безопасные способы оплаты и круглосуточную поддержку
				клиентов.
			</p>
			<Link
				className='flex justify-center space-x-4'
				href={DASHBOARD_PAGES.PRODUCTS}
			>
				<button className='inline-flex items-center text-white bg-red-500 border-0 py-3 px-6 focus:outline-none hover:bg-red-600 rounded-lg text-lg font-medium transition-all shadow-md'>
					Продукты
					<ArrowRight size={18} className='ml-2' />
				</button>
			</Link>
		</div>
	);
};
