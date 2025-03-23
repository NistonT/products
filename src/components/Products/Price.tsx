import { SetStateAction } from "react";

type Props = {
	sortByPrice: "" | "asc" | "desc";
	setSortByPrice: (value: SetStateAction<"" | "asc" | "desc">) => void;
};

export const Price = ({ sortByPrice, setSortByPrice }: Props) => {
	return (
		<div className='flex items-center space-x-4'>
			<span className='text-gray-700'>Сортировать по цене:</span>
			<button
				onClick={() => setSortByPrice(sortByPrice === "asc" ? "" : "asc")}
				className={`px-4 py-2 rounded ${
					sortByPrice === "asc"
						? "bg-red-600 text-white"
						: "bg-gray-200 text-gray-700"
				}`}
			>
				По возрастанию
			</button>
			<button
				onClick={() => setSortByPrice(sortByPrice === "desc" ? "" : "desc")}
				className={`px-4 py-2 rounded ${
					sortByPrice === "desc"
						? "bg-red-600 text-white"
						: "bg-gray-200 text-gray-700"
				}`}
			>
				По убыванию
			</button>
		</div>
	);
};
