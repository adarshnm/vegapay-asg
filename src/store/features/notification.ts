import { PayloadAction, createSlice } from '@reduxjs/toolkit'


const initialState: INotification = {
    type: "",
    text: "",
}
export const notificationSlice = createSlice({
    name: 'notification',
    initialState: initialState,
    reducers: {
        clear: () => {
            return { ...initialState }
        },
        error: (state, action: PayloadAction<string| undefined>) => {
            return {
                type: 'error',
                text: action.payload || "Unfortunately, something went wrong, please try again!"
            };
        },
        success: (state, action: PayloadAction<string | undefined>) => {
            return {
                type: 'success',
                text: action.payload || "Success!"
            }
        }
    }
})

// Action creators are generated for each case reducer function
export const { error, success, clear } = notificationSlice.actions;

export default notificationSlice.reducer;