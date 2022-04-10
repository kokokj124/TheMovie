import { createAction, createSlice, Action, AnyAction } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
export const actionDataPages = createAction<PageInfor>('actionDataPages')
export const actionRequestPage = createAction<number>('actionRequestPage')

interface RejectedAction extends Action {
  error: Error
}

interface PageInfor{
    page: number,
    results: Array<MovieInfor>,
    total_pages: number,
    total_results: number
}

export interface MovieInfor{
    id: number,
    original_language?: string,
    poster_path: string,
    title: string,
    vote_average: number,
    vote_count: number
}

const initialState: PageInfor = {
    page: 0,
    results: [
      {
        id: 0,
        poster_path: "",
        title: "",
        vote_average: 0,
        vote_count: 0,
      }
    ],
    total_pages: 0,
    total_results: 0,
}


export const pageSlice = createSlice({
  name: 'page',
  initialState: {loading: true, data: initialState},
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(actionDataPages, (state, action) => {
          state.data = action.payload;
          state.loading = false;
        // action is inferred correctly here if using TS
      })
      .addCase(actionRequestPage, (state) => {
        state.loading = true;        
      })
      // and provide a default case if no other handlers matched
      .addDefaultCase((state, action) => {})
  },
})