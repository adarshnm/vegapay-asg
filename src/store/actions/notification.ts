import { error, success, clear } from "../features/notification";
import { AppDispatch } from "../store"

const timeout = 4000;
export default {
    success(message?: string) {
        return (dispatch: AppDispatch) => {
            dispatch(success(message));
            setTimeout(() => dispatch(clear()), timeout);

        }
    },
    error(message?: string) {

        return (dispatch: AppDispatch) => {

            dispatch(error(message));
            setTimeout(() => dispatch(clear()), timeout);

        }
    }

}