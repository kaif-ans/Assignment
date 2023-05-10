import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';

export default function BasicTextFields() {
  return (
    <div>
      <img
        src="src\images\bg-header-desktop.svg"
        alt="bg"
        className="head-bg"
      />

      <Box
        component="form"
        className="jobform"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <h1>Post a New Job</h1>
        <TextField id="outlined-basic" label="Company" variant="outlined" />
        <TextField id="outlined-basic" label="Position" variant="outlined" />
        <TextField id="outlined-basic" label="Job Role" variant="outlined" />
        <TextField id="outlined-basic" label="Location" variant="outlined" />
        <TextField id="outlined-basic" label="Experience" variant="outlined" />
        <TextField id="outlined-basic" label="Salary" variant="outlined" />
        <Button variant="contained">Submit</Button>
      </Box>
    </div>
  );
}
