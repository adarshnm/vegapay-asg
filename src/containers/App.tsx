import React, { useEffect } from "react";
import useAppDispatch from "../hooks/useAppDispatch";
import Home from "./Home";
import { searchCustomerRecords } from "../store/actions/searchRecords";
import Notification from "./Notification";

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    // dispatch(fetchUsers());
    dispatch(
      searchCustomerRecords({
        value: "",
        branchId: "4ff819ab-00ea-45b8-9544-205407c0680c",
        page: 0,
        pageSize: 10,
      })
    );
  }, []);
  return (
    <>
      <Home />
      <Notification />
    </>
  );
}

export default App;
