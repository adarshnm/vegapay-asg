import React, { useEffect } from "react";
import useAppDispatch from "../hooks/useAppDispatch";
import { fetchUsers } from "../store/actions/users";
import Home from "./Home";
import { searchCustomerRecords } from "../store/actions/searchRecords";

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
    dispatch(
      searchCustomerRecords({
        value: "",
        branchId: "4ff819ab-00ea-45b8-9544-205407c0680c",
        page: 0,
        pageSize: 10,
      })
    );
  }, []);
  return <Home />;
}

export default App;
