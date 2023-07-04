import { searchCustomers } from "../../services/api"
import { fetch } from "../features/searchRecords";
import { AppDispatch } from "../store"

export const searchCustomerRecords = (data) => {
    return async (dispatch: AppDispatch) => {
        try {
            // make an async call in the thunk
            const response = await searchCustomers(data);
            console.log(response);
            if (response) {
                dispatch(fetch(response.data))
            }
        } catch (err) {
            // If something went wrong, handle it here
            console.error(err);

        }
    }
}