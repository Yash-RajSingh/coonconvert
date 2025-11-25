import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface FileState {
  uploadedFiles: File[];
}

const initialState: FileState = {
  uploadedFiles: [],
};

const filesSlice = createSlice({
  name: "files",
  initialState,
  reducers: {
    addFiles: (state, action: PayloadAction<File[]>) => {
      state.uploadedFiles.push(...action.payload);
    },
    removeFile: (state, action: PayloadAction<number>) => {
      state.uploadedFiles.splice(action.payload, 1);
    },
    clearFiles: (state) => {
      state.uploadedFiles = [];
    },
    reorderFiles: (state, action: PayloadAction<{ fromIndex: number; toIndex: number }>) => {
      const { fromIndex, toIndex } = action.payload;
      const [movedFile] = state.uploadedFiles.splice(fromIndex, 1);
      state.uploadedFiles.splice(toIndex, 0, movedFile);
    },
  },
});

export const { addFiles, removeFile, clearFiles, reorderFiles } = filesSlice.actions;
export default filesSlice.reducer;
