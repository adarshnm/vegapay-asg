import { PayloadAction, createSlice } from '@reduxjs/toolkit'


const initialState: Records = {}
export const searchRecordsSlice = createSlice({
    name: 'searchRecords',
    initialState: initialState,
    reducers: {
        clear: () => {
            return {}
        },
        fetch: (state, action: PayloadAction<Records>) => {
            return action.payload;
        }
    }
})

// Action creators are generated for each case reducer function
export const { fetch, clear } = searchRecordsSlice.actions;

export default searchRecordsSlice.reducer;