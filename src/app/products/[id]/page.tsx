import { IdProduct } from "./IdProduct";

interface Props {
	params: {
		id: number;
	};
}

export default function ProductPage({ params: { id } }: Props) {
	return <IdProduct id={id} />;
}
