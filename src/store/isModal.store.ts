import { create } from "zustand";

interface IIsModal {
	isModal: boolean;
	setIsModal: () => void;
}

export const useIsModal = create<IIsModal>(set => ({
	isModal: false,
	setIsModal: () =>
		set(state => ({
			isModal: !state.isModal,
		})),
}));
