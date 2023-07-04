import { PayloadAction, createSlice } from '@reduxjs/toolkit'


const initialState: IUser[] = []
export const usersSlice = createSlice({
  name: 'users',
  initialState: initialState,
  reducers: {
    clear: () => {
      return []
    },
    fetch: (state, action: PayloadAction<IUser[]>) => {
      state = action.payload
      return state;
    }
  }
})

// Action creators are generated for each case reducer function
export const { fetch, clear } = usersSlice.actions;

export default usersSlice.reducer;