import React from "react";
import { Link } from "react-router-dom";
import "../../css/Navbar.css";
import {
  Box,
  Button,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  FilledInput,
} from "@mui/material";
import { Search, SearchOff } from "@mui/icons-material";

export const Navbar = (props) => {
  return (
    <Box>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={3}>
          <p className="logo-style-secondary">Logo</p>
        </Grid>
        <Grid item xs={12} sm={5}>
          <ul className="nav-ul">
            <li>Home</li>
            <li>About Us</li>
            <li>Portfolio</li>
            <li>Services</li>
            <li>Careers</li>
          </ul>
        </Grid>
        <Grid item xs={12} sm={2}>
          {props.showSearch ? (
            <>
              <FormControl sx={{ m: 1, width: "25ch" }} variant="filled">
                <InputLabel htmlFor="standard-adornment-password">
                  Password
                </InputLabel>
                <FilledInput
                  id="filled-adornment-amount"
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={props.toggleSearch}
                        // onMouseDown={handleMouseDownPassword}
                      >
                        <SearchOff />
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </>
          ) : (
            <IconButton
              aria-label="toggle password visibility"
              onClick={props.toggleSearch}
            >
              <Search />
            </IconButton>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};
