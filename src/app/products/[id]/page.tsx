import { productsService } from "@/services/products.service";
import { IProduct } from "@/store/store";
import { IdProduct } from "./IdProduct";

interface Props {
	params: {
		id: number;
	};
}

export async function generateStaticParams() {
	const products = await productsService.getProducts();

	return products.data.map((product: IProduct) => ({
		id: product.id.toString(),
	}));
}

export default function ProductPage({ params: { id } }: Props) {
	return <IdProduct id={id} />;
}
