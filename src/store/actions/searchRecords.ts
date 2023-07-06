import { searchCustomers } from "../../services/api"
import { clear, error } from "../features/notification";
import { fetch } from "../features/searchRecords";
import { AppDispatch } from "../store"
import notificationActions from "./notification";

export const searchCustomerRecords = (data) => {
    return async (dispatch: AppDispatch) => {
        try {
            // make an async call in the thunk
            const response = await searchCustomers(data);
            if (response) {
                dispatch(fetch(response.data))
            }
        } catch (err) {
            // If something went wrong, handle it here
            dispatch(notificationActions.error());

        }
    }
}