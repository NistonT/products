import { SetStateAction } from "react";

type Props = {
	searchTerm: string;
	setSearchTerm: (value: SetStateAction<string>) => void;
};

export const Search = ({ searchTerm, setSearchTerm }: Props) => {
	return (
		<input
			type='text'
			value={searchTerm}
			onChange={e => setSearchTerm(e.target.value)}
			placeholder='Поиск по названию, описанию или категории...'
			className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500'
		/>
	);
};
