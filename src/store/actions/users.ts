import { getUsers } from "../../services/api"
import { fetch } from "../features/users";
import { AppDispatch } from "../store"

export const fetchUsers = () => {
    return async (dispatch: AppDispatch) => {
        try {
            // make an async call in the thunk
            const users = await getUsers();
            console.log(users);
            if (users) {
                dispatch(fetch(users.data))
            }
        } catch (err) {
            // If something went wrong, handle it here
            console.error(err);
            
        }
    }
}