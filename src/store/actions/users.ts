import { getUsers } from "../../services/api"
import { fetch } from "../features/users";
import { AppDispatch } from "../store"
import notificationActions from "./notification";

export const fetchUsers = () => {
    return async (dispatch: AppDispatch) => {
        try {
            // make an async call in the thunk
            const users = await getUsers();
            if (users) {
                dispatch(fetch(users.data))
            }
        } catch (err) {
            // If something went wrong, handle it here

            dispatch(notificationActions.error())
        }
    }
}