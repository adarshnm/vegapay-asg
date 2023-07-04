import { ChangeEvent, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Card, TextField } from "../components";
import Grid from "@mui/material/Grid";
import InputAdornment from "@mui/material/InputAdornment";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Button } from "@mui/material";
import CustomersTable from "./Tables/CustomersTable";
import ViewModal from "./Forms/ViewModal";
import CreateAccountModal from "./Forms/CreateAccount";
import useAppDispatch from "../hooks/useAppDispatch";
import { searchCustomerRecords } from "../store/actions/searchRecords";
import KitData from "./KitData";
import CardsInfo from "./CardsInfo";

function CardSale() {
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [searchKeyword, setSearchKeyword] = useState("");
  const dispatch = useAppDispatch();

  const handleKeywordChange = (event: ChangeEvent<any>) => {
    setSearchKeyword(event.target.value);
  };

  const onSearchClick = () => {
    dispatch(
      searchCustomerRecords({
        value: searchKeyword,
        branchId: "4ff819ab-00ea-45b8-9544-205407c0680c",
        page: 0,
        pageSize: 10,
      })
    );
  };

  return (
    <Box>
      <Box
        sx={{
          flexGrow: 1,
          p: 3,
          mt: 8,
          backgroundColor: "#ffffff",
          borderRadius: 4,
        }}
      >
        <Typography variant="h6">New Card Sale</Typography>
        <Typography variant="subtitle1">Issue New Card</Typography>
        <Grid
          container
          spacing={3}
          sx={{
            mt: 1,
          }}
        >
          <Grid item xs={12} sm={4}>
            <Card
              icon="contact"
              label="Kit"
              isActive={activeCardIndex === 0}
              onClick={() => setActiveCardIndex(0)}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card
              icon="profile"
              label="Personalised Sale"
              isActive={activeCardIndex === 1}
              onClick={() => setActiveCardIndex(1)}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card
              icon="profile"
              label="Reissue"
              isActive={activeCardIndex === 2}
              onClick={() => setActiveCardIndex(2)}
            />
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          flexGrow: 1,
          p: 3,
          my: 8,
          backgroundColor: "#ffffff",
          flexWrap: "wrap",
          borderRadius: 4,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 2,
        }}
      >
        <TextField
          id="search-mobile"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchOutlinedIcon />
              </InputAdornment>
            ),
          }}
          placeholder="Search by Mobile or Customer"
          sx={{
            minWidth: "20%",
          }}
          value={searchKeyword}
          onChange={handleKeywordChange}
        />
        <Button variant="outlined" color="secondary" onClick={onSearchClick}>
          Search
        </Button>
      </Box>
      {activeCardIndex === 0 ? <KitData /> : <CardsInfo /> }
    </Box>
  );
}

export default CardSale;
