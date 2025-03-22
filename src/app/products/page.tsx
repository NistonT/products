import { Metadata } from "next";
import { Products } from "./Products";

export const metadata: Metadata = {
	title: "Продукты",
};
export default function ProductsPage() {
	return (
		<>
			<Products />
		</>
	);
}
