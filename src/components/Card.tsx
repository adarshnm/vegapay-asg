import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { CardProps, default as MuiCard } from "@mui/material/Card";
import ContactEmergencyOutlinedIcon from "@mui/icons-material/ContactEmergencyOutlined";
import { Typography } from "@mui/material";

const IconContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  padding: 16,
  borderRadius: "50%",
  width: 62,
  height: 62,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
function Card(props: ICardProps) {
  return (
    <Box
      sx={{
        display: "flex",
        border: "1px solid #dadada",
        paddingLeft: 2,
        alignItems: "center",
        justifyContent: "flex-start",
        borderRadius: 4,
        gap: 3,
        height: 120,
        cursor: "pointer",
        ...(props.isActive
          ? {
              backgroundColor: "#f0f2f6",
            }
          : {
              backgroundColor: "#fff",
            }),
      }}
      onClick={props.onClick}
    >
      <IconContainer>
        <ContactEmergencyOutlinedIcon
          sx={{
            color: "#ffffff",
            width: 36,
            height: 60,
          }}
        />
      </IconContainer>
      <Typography variant="h6">{props.label}</Typography>
    </Box>
  );
}

export default Card;
