import {
  TextFieldProps,
  default as MuiTextField,
} from "@mui/material/TextField";
import { styled } from "@mui/material/styles";

const StyledTextField = styled(MuiTextField)(({ theme }) => ({
  borderRadius: 12,
  "& .MuiInputBase-root": {
    borderRadius: 12,
  },
}));

const TextField = (props: TextFieldProps) => (
  <StyledTextField {...props} variant="outlined">
    {props.children}
  </StyledTextField>
);

export default TextField;
