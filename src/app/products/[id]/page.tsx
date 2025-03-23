/* eslint-disable */
import { productsService } from "@/services/products.service";
import { IProduct } from "@/store/store";
import { IdProduct } from "./IdProduct";

interface Params {
  id: string;
}

export async function generateStaticParams() {
  const products = await productsService.getProducts();
  return products.data.map((product: IProduct) => ({
    id: product.id.toString(),
  }));
}

// @ts-expect-error
export default function ProductPage({ params }: { params: Params }) {
  return <IdProduct id={Number(params.id)} />;
}
