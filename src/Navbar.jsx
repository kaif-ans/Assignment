import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import Link from "@mui/material/Link";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            &nbsp; &nbsp; &nbsp; Easy Jobs
          </Typography>
          <Link href="/jobform">
            <Button variant="contained">Create Job</Button>
          </Link>
          <span> &nbsp; &nbsp; </span>
          {/* <Link href="/login">
            <Button variant="contained">Login</Button>
          </Link> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
