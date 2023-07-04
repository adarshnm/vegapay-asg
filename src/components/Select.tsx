import { SelectProps, default as MuiSelect } from "@mui/material/Select";
import ArrowDropDownCircleOutlinedIcon from "@mui/icons-material/ArrowDropDownCircleOutlined";
import { styled } from "@mui/material/styles";

const StyledSelect = styled(MuiSelect)(({ theme }) => ({
  borderRadius: 12,
  "& .MuiInputBase-root": {
    borderRadius: 12,
  },
}));

const Select = (props: SelectProps) => (
  <StyledSelect {...props} IconComponent={ArrowDropDownCircleOutlinedIcon}>
    {props.children}
  </StyledSelect>
);

export default Select;
