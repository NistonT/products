import { DASHBOARD_PAGES } from "@/config/pages-url.config";
import { FilePlus, Home, ShoppingBag } from "lucide-react";

export const navigation = [
	{
		href: DASHBOARD_PAGES.HOME,
		title: "Главная",
		icon: Home,
	},
	{
		href: DASHBOARD_PAGES.PRODUCTS,
		title: "Продукты",
		icon: ShoppingBag,
	},
	{
		href: DASHBOARD_PAGES.CREATE_PRODUCT,
		title: "Добавить продукт",
		icon: FilePlus,
	},
];
