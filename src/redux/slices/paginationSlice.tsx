import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PaginationState {
  currentPage: number,
  totalPages: number,
  pageSize: number,
  totalElements: number,
}

const initialPaginationState: PaginationState = {
  currentPage: 1,
  totalPages: 1,
  pageSize: 12,
  totalElements: 1,
}

const paginationSlice = createSlice({
  name: 'pagination',
  initialState: initialPaginationState,
  reducers: {
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    setTotalPages: (state, action: PayloadAction<number>) => {
      state.totalPages = action.payload;
    },
    setPageSize: (state, action: PayloadAction<number>) => {
      state.pageSize = action.payload;
    },
    setTotalElements: (state, action: PayloadAction<number>) => {
      state.totalElements = action.payload;
    },
    resetPagination: (state) => {
      state.currentPage = initialPaginationState.currentPage;
      state.totalPages = initialPaginationState.totalPages;
      state.totalElements = initialPaginationState.totalElements;
    }
  }
});

export const { setCurrentPage, setTotalPages, setPageSize, setTotalElements, resetPagination } = paginationSlice.actions;
export default paginationSlice.reducer;