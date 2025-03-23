import { SetStateAction } from "react";

type Props = {
	selectedCategory: string;
	setSelectedCategory: (value: SetStateAction<string>) => void;
	categories: string[];
};

export const Category = ({
	selectedCategory,
	setSelectedCategory,
	categories,
}: Props) => {
	return (
		<select
			value={selectedCategory}
			onChange={e => setSelectedCategory(e.target.value)}
			className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500'
		>
			<option value=''>Все категории</option>
			{categories.map(category => (
				<option key={category} value={category}>
					{category}
				</option>
			))}
		</select>
	);
};
