import { create } from "zustand";

export interface IIsLiked {
	isLike: boolean;
	setIsLike: () => void;
}

export const useIsLiked = create<IIsLiked>(set => ({
	isLike: false,
	setIsLike: () =>
		set(state => ({
			isLike: !state.isLike,
		})),
}));
