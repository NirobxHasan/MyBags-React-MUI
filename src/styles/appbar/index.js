import "@fontsource/montez";
import { Box, List, Typography, styled } from "@mui/material";
import { Colors } from "../theme";

export const AppbarContainer = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: 4,
  padding: "2px 8px",
}));

export const AppbarHeader = styled(Typography)(() => ({
  padding: "4px",
  flexGrow: 1,
  fontSize: "4em",
  fontFamily: '"Montez", "cursive"',
  color: Colors.secondary,
}));

export const MyList = styled(List)(({ type }) => ({
  display: type === "row" ? "flex" : "block",
  flexGrow: 3,
  justifyContent: "center",
  alignItems: "center",
}));

export const ActionIconsContainerMobile = styled(Box)(() => ({
  display: "flex",
  background: Colors.shaft,
  position: "fixed",
  bottom: 0,
  left: 0,
  width: "100%",
  alignItems: "center",
  zIndex: 99,
  borderTop: `1pz solid ${Colors.border}`,
}));
export const ActionIconsContainerDesktop = styled(Box)(() => ({
  flexGrow: 0,
}));
