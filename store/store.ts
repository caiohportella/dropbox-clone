import { create } from "zustand";

interface AppState {
  isDeleteModalOpen: boolean;
  setIsDeleteModalOpen: (isOpen: boolean) => void;

  isRenameModalOpen: boolean;
  setIsRenameModalOpen: (isOpen: boolean) => void;

  fileId: string | null;
  setFileId: (fileId: string) => void;

  filename: string;
  setFilename: (filename: string) => void;
}

export const useAppStore = create<AppState>((set) => ({
  isDeleteModalOpen: false,
  setIsDeleteModalOpen: (isOpen) => set({ isDeleteModalOpen: isOpen }),

  isRenameModalOpen: false,
  setIsRenameModalOpen: (isOpen) => set({ isRenameModalOpen: isOpen }),

  fileId: null,
  setFileId: (fileId: string) => set((state) => ({ fileId })),

  filename: "",
  setFilename: (filename: string) => set((state) => ({ filename })),
}));
