import { create } from "zustand";

export type ModalName = "callback" | "message" | "review" | "video" | "menu" | "office" | null;

type UiState = {
  modal: ModalName;
  open: (modal: Exclude<ModalName, null>) => void;
  close: () => void;
};

export const useUi = create<UiState>((set) => ({
  modal: null,
  open: (modal) => set({ modal }),
  close: () => set({ modal: null }),
}));
