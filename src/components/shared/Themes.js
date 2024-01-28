import React from "react";
import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          backgroundColor: "white",
        },
      },
    },
    MuiGrid: {
      styleOverrides: {
        root: {
          padding: "0 0 0 1em",
        },
      },
    },
  },
});
