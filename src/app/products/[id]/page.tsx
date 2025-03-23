import { productsService } from "@/services/products.service";
import { IProduct } from "@/store/store";
import { IdProduct } from "./IdProduct";

// Тип для параметров маршрутизации
type Params = {
  id: string;
};

// Тип для пропсов страницы
type Props = {
  params: Params;
};

// Функция generateStaticParams возвращает массив объектов с id как строкой
export async function generateStaticParams() {
  const products = await productsService.getProducts();

  return products.data.map((product: IProduct) => ({
    id: product.id.toString(), // Преобразуем id в строку
  }));
}

// Компонент ProductPage теперь работает с правильными типами
export default function ProductPage({ params }: Props) {
  const { id } = params;

  return <IdProduct id={Number(id)} />;
}
